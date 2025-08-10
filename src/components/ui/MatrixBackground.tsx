import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters (mix of Japanese katakana, numbers, and symbols)
    const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?'
    const chars = matrixChars.split('')

    // Column properties
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100 // Start at random heights above screen
    }

    // Animation function with slower speed
    let lastTime = 0
    const animationSpeed = 80 // Milliseconds between updates (higher = slower)
    
    const draw = (currentTime: number) => {
      if (currentTime - lastTime < animationSpeed) {
        animationRef.current = requestAnimationFrame(draw)
        return
      }
      lastTime = currentTime

      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F4'  // Matrix green color
      ctx.font = `${fontSize}px 'Courier New', monospace`

      for (let i = 0; i < drops.length; i++) {
        // Pick a random character
        const text = chars[Math.floor(Math.random() * chars.length)]
        
        // Draw the character
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        // Add some brightness variation
        const brightness = Math.random() * 0.5 + 0.5
        ctx.fillStyle = `rgba(0, 255, 68, ${brightness})`
        ctx.fillText(text, x, y)

        // Reset drop to top when it goes off screen (less frequent resets)
        if (y > canvas.height && Math.random() > 0.985) {
          drops[i] = Math.random() * -50 // Start higher above screen
        }

        // Move drop down (slower movement)
        drops[i] += 0.5
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    // Start animation
    draw(performance.now())

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background: '#000000',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
