import { useEffect, useRef } from 'react'

export default function HexGridBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const staticRef = useRef<HTMLCanvasElement | null>(null)
  const animRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current!
    const staticCanvas = staticRef.current!
    const animCanvas = animRef.current!

    const staticCtx = staticCanvas.getContext('2d') as CanvasRenderingContext2D
    const ctx = animCanvas.getContext('2d') as CanvasRenderingContext2D

    let width = 0
    let height = 0
    let dpr = 1

    // Mouse influence state (in local container coords)
    let mouseX = -1
    let mouseY = -1
    let mouseActive = false

    // Hex geometry
    let radius = 26
    let hexHeight = Math.sqrt(3) * radius
    let horizStep = 1.5 * radius
    let vertStep = hexHeight

    type Cell = {
      cx: number
      cy: number
      phase: number
      jitter: number
      ampPhase: number
      ampSpeed: number
      driftSpeed: number
    }
    let cells: Cell[] = []
    let unitHex: Path2D | null = null

    function pickComputedColor(varName: string, fallback: string) {
      const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
      return val || fallback
    }

    function buildUnitHex(r: number) {
      const path = new Path2D()
      const angle = Math.PI / 3
      for (let i = 0; i < 6; i++) {
        const a = angle * i - Math.PI / 6
        const px = r * Math.cos(a)
        const py = r * Math.sin(a)
        if (i === 0) path.moveTo(px, py)
        else path.lineTo(px, py)
      }
      path.closePath()
      return path
    }

    function prng(seed: number) {
      let t = seed >>> 0
      return () => {
        t += 0x6D2B79F5
        let x = Math.imul(t ^ (t >>> 15), 1 | t)
        x ^= x + Math.imul(x ^ (x >>> 7), 61 | x)
        return ((x ^ (x >>> 14)) >>> 0) / 4294967296
      }
    }

    function setCanvasSize(c: HTMLCanvasElement, context: CanvasRenderingContext2D) {
      c.width = Math.floor(width * dpr)
      c.height = Math.floor(height * dpr)
      c.style.width = `${width}px`
      c.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    let lastTime = -1e9 // ensure the first draw runs immediately

    function resize() {
      const rect = container.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))

      // Cap DPR for performance
      dpr = Math.min(window.devicePixelRatio || 1, 1.25)

      setCanvasSize(staticCanvas, staticCtx)
      setCanvasSize(animCanvas, ctx)

      // Recompute geometry (slightly fewer hexes)
      const base = Math.max(28, Math.min(44, Math.floor(width / 36)))
      radius = base
      hexHeight = Math.sqrt(3) * radius
      horizStep = 1.5 * radius
      vertStep = hexHeight

      unitHex = buildUnitHex(radius)

      // Rebuild cells with per-load randomized seed
      cells = []
      const timeSeed = Math.floor((window.performance?.timeOrigin || Date.now()) % 2147483647)
      const rng = prng(0x9E3779B1 ^ timeSeed)
      const cols = Math.ceil(width / horizStep) + 2
      const rows = Math.ceil(height / (vertStep * 0.75)) + 2
      for (let row = 0; row < rows; row++) {
        const y = row * (vertStep * 0.75)
        const xOffset = row % 2 === 0 ? 0 : horizStep * 0.5
        for (let col = 0; col < cols; col++) {
          const x = col * horizStep + xOffset
          const phase = rng() * Math.PI * 2
          const jitter = (rng() - 0.5) * 0.35
          const ampPhase = rng() * Math.PI * 2
          const ampSpeed = 0.05 + 0.03 * rng() // 0.05–0.08 Hz (slower breathing)
          const driftSpeed = 0.05 + 0.1 * rng() // radians/sec small phase drift per cell
          cells.push({ cx: x, cy: y, phase, jitter, ampPhase, ampSpeed, driftSpeed })
        }
      }

      // Pre-render static faint grid
      staticCtx.clearRect(0, 0, width, height)
      staticCtx.save()
      staticCtx.strokeStyle = pickComputedColor('--terminal-border', '#2b2442')
      staticCtx.globalAlpha = 0.12
      staticCtx.lineWidth = 1
      staticCtx.lineJoin = 'round'
      for (const c of cells) {
        staticCtx.save()
        staticCtx.translate(c.cx, c.cy)
        staticCtx.stroke(unitHex as Path2D)
        staticCtx.restore()
      }
      staticCtx.restore()

      // Force an initial animated draw frame with current wall-clock time
      draw(performance.now())
    }

    function draw(time: number) {
      // Handle time going backwards (e.g., after an artificial initial draw)
      if (time < lastTime) {
        lastTime = time - 1000 / 30
      }
      // 30 FPS throttle
      if (time - lastTime < 1000 / 30) return
      lastTime = time

      const strokeColor = pickComputedColor('--terminal-command', '#8fbafc')

      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = strokeColor
      ctx.lineJoin = 'round'

      const t = time * 0.001
      const omega = Math.PI * 2 * 0.25 // 0.25 Hz base pulse

      // Precompute mouse influence radius and max effect
      const influenceRadius = radius * 4.0
      const invR = 1 / Math.max(1e-3, influenceRadius)

      for (let i = 0; i < cells.length; i++) {
        const c = cells[i]
        // Base pulse with slow phase drift
        const wave = Math.sin(omega * t + c.phase + c.driftSpeed * t) * 0.5 + 0.5 // 0..1
        // Per-cell amplitude modulation (breathing)
        const ampPhase = Math.sin(Math.PI * 2 * c.ampSpeed * t + c.ampPhase) * 0.5 + 0.5 // 0..1
        const ampFactor = 0.5 + 0.9 * ampPhase // 0.5..1.4

        let brightnessCore = 0.1 + 0.7 * wave * Math.min(ampFactor, 1.4)
        let ampPhaseEff = ampPhase

        // Mouse influence: boost brightness and amplitude near cursor
        if (mouseActive) {
          const dx = c.cx - mouseX
          const dy = c.cy - mouseY
          const dist = Math.hypot(dx, dy)
          let h = 1 - dist * invR // linear falloff
          if (h > 0) {
            // Smooth the falloff for nicer blend
            h = h * h
            // Brightness goes towards max
            brightnessCore = brightnessCore * (1 - h) + 1.0 * h
            // Amplitude goes towards max as well
            ampPhaseEff = ampPhaseEff * (1 - h) + 1.0 * h
          }
        }

        // Outer soft stroke
        ctx.save()
        ctx.globalAlpha = Math.min(1, brightnessCore * (0.35 + 0.3 * ampPhaseEff))
        ctx.lineWidth = 1.7 + 1.3 * ampPhaseEff
        ctx.translate(c.cx, c.cy)
        ctx.stroke(unitHex as Path2D)
        ctx.restore()

        // Inner sharp stroke
        ctx.save()
        ctx.globalAlpha = Math.min(1, brightnessCore)
        ctx.lineWidth = 0.95
        ctx.translate(c.cx, c.cy)
        ctx.stroke(unitHex as Path2D)
        ctx.restore()
      }
    }

    function animate(now: number) {
      draw(now)
      rafRef.current = requestAnimationFrame(animate)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        mouseX = x
        mouseY = y
        mouseActive = true
      } else {
        mouseActive = false
      }
    }

    function handleMouseLeave() {
      mouseActive = false
    }

    resize()
    animate(0)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)
    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <canvas ref={staticRef} style={{ position: 'absolute', inset: 0 }} />
      <canvas ref={animRef} style={{ position: 'absolute', inset: 0 }} />
    </div>
  )
}
