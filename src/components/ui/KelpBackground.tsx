import React, { useRef, useEffect } from 'react'

type ExtendedWebGLContextAttributes = WebGLContextAttributes & {
  powerPreference?: 'default' | 'high-performance' | 'low-power';
  desynchronized?: boolean;
};

// Kelp WebGL Canvas Background (based on the previous Fractal Forest effect)
const KelpBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Size with DPR and adaptive internal render scale
    let renderScale = 0.9 // 0.6..1.0
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const setSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      canvas.width = Math.floor(width * dpr * renderScale)
      canvas.height = Math.floor(height * dpr * renderScale)
    }
    setSize()
    window.addEventListener('resize', setSize)

    const gl = (canvas.getContext('webgl', {
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
      desynchronized: true,
    } as ExtendedWebGLContextAttributes) || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null))
    if (!gl) {
      console.warn('WebGL not supported, Kelp background disabled')
      return () => window.removeEventListener('resize', setSize)
    }

    // Fullscreen quad vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    // Fragment shader retained from the forest effect with branches disabled
    const fragmentShaderSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash2(i);
        float b = hash2(i + vec2(1.0, 0.0));
        float c = hash2(i + vec2(0.0, 1.0));
        float d = hash2(i + vec2(1.0, 1.0));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = p * 2.02 + vec2(37.2, 11.7);
          a *= 0.5;
        }
        return v;
      }

      float sdSegment(vec2 p, vec2 a, vec2 b, vec2 resolution) {
        vec2 rp = p * resolution;
        vec2 ra = a * resolution;
        vec2 rb = b * resolution;
        vec2 pa = rp - ra;
        vec2 ba = rb - ra;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        float d = length(pa - ba * h);
        return d / min(resolution.x, resolution.y);
      }

      mat2 rot2(float a) {
        float c = cos(a), s = sin(a);
        return mat2(c, -s, s, c);
      }

      float trunk(vec2 uv, float x0, float t, vec2 res) {
        float sway = 0.035 * sin(t * 0.6 + x0 * 13.0) * smoothstep(0.0, 1.0, uv.y);
        float curl = 0.02 * sin(uv.y * 10.0 + 2.0 * t + x0 * 21.0);
        float center = x0 + sway + curl * pow(uv.y, 1.2);
        float baseThickness = 0.010;
        float thickness = baseThickness * (1.3 - 0.9 * uv.y);
        float dist = abs(uv.x - center);
        float line = exp(-pow(dist / max(1e-4, thickness), 2.0));
        return line;
      }

      // Branches disabled
      float branches(vec2 uv, float x0, float t, float seed, vec2 res) {
        return 0.0;
      }

      float canopy(vec2 uv, float t) {
        float n = fbm(uv * vec2(6.0, 10.0) + vec2(0.0, t * 0.07));
        float mask = smoothstep(0.25, 0.95, uv.y) * smoothstep(1.05, 0.35, uv.y + 0.35 * fbm(uv * 3.0));
        return n * mask;
      }

      float fireflies(vec2 uv, float t) {
        vec2 p = uv * 6.0;
        float f = 0.0;
        for (int i = 0; i < 3; i++) {
          vec2 cell = floor(p + float(i) * 13.37);
          float rnd = hash2(cell + vec2(3.1 * float(i), 7.7));
          vec2 pos = cell + vec2(hash(rnd * 10.0), hash(rnd * 20.0));
          pos += 0.25 * vec2(sin(t * (0.3 + rnd) + rnd * 6.0), cos(t * (0.37 + rnd) + rnd * 4.0));
          vec2 d = (p - pos);
          float dist = length(d);
          f += smoothstep(0.12, 0.0, dist) * (0.5 + 0.5 * sin(t * 3.0 + rnd * 20.0));
        }
        return f * 0.6;
      }

      void main() {
        vec2 res = u_resolution;
        vec2 uv = gl_FragCoord.xy / res;
        float t = u_time;

        // Underwater-ish gradient
        vec3 top = vec3(0.02, 0.08, 0.12);
        vec3 bottom = vec3(0.00, 0.02, 0.06);
        vec3 col = mix(bottom, top, smoothstep(0.0, 1.0, uv.y));

        float haze = smoothstep(0.0, 0.35, uv.y);
        col *= mix(vec3(0.82, 0.9, 0.95), vec3(1.0), haze);

        const int N = 10;
        float forestI = 0.0;
        float branchI = 0.0;
        for (int i = 0; i < N; i++) {
          float fi = float(i);
          float xBase = (fi + 0.5) / float(N);
          float jitter = (hash(fi * 17.31) - 0.5) * 0.14;
          float par = 0.02 * sin(t * 0.3 + fi * 3.1);
          float x0 = xBase + jitter + par;
          float ti = trunk(uv, x0, t, res);
          forestI += ti;
          branchI += branches(uv, x0, t, fi * 13.7 + 2.3, res);
        }

        float leaf = canopy(uv, t) * 0.6;
        float flies = fireflies(uv, t) * smoothstep(0.25, 1.0, uv.y);

        vec3 trunkCol = vec3(0.06, 0.14, 0.12);
        vec3 branchCol = vec3(0.08, 0.18, 0.16);
        vec3 leafCol = vec3(0.08, 0.35, 0.28);
        vec3 glowCol = vec3(0.2, 0.9, 0.8);

        col = mix(col, trunkCol, clamp(forestI * 0.9, 0.0, 1.0));
        col = mix(col, branchCol, clamp(branchI * 0.7, 0.0, 1.0));
        col += leafCol * leaf * 0.7;
        col += glowCol * flies * 0.15;

        vec2 pq = (gl_FragCoord.xy - 0.5 * res.xy) / res.y;
        float vig = smoothstep(1.25, 0.2, length(pq));
        col *= mix(0.9, 1.0, vig);

        col = col / (1.0 + col);
        gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
      }
    `

    function createShader(type: number, source: string) {
      if (!gl) return null
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)
    if (!vertexShader || !fragmentShader) {
      window.removeEventListener('resize', setSize)
      return
    }
    const program = gl.createProgram()
    if (!program) {
      window.removeEventListener('resize', setSize)
      return
    }
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      window.removeEventListener('resize', setSize)
      return
    }
    gl.useProgram(program)
    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.CULL_FACE)
    gl.clearColor(0, 0, 0, 1)

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    )
    const positionLocation = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    if (!timeLocation || !resolutionLocation) {
      window.removeEventListener('resize', setSize)
      return
    }

    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform1f(timeLocation, 0)
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 6)

    let rafId = 0
    const start = performance.now()
    let lastDraw = start
    let frames = 0
    let fps = 60
    let targetFps = 60
    let lastFpsCheck = start
    let highFpsSeconds = 0

    const render = (now: number) => {
      const width = window.innerWidth
      const height = window.innerHeight
      const minDelta = 1000 / targetFps
      const delta = now - lastDraw
      if (delta < minDelta) {
        rafId = requestAnimationFrame(render)
        return
      }
      const targetW = Math.floor(width * dpr * renderScale)
      const targetH = Math.floor(height * dpr * renderScale)
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW
        canvas.height = targetH
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform1f(timeLocation, (now - start) * 0.001)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      lastDraw = now

      frames++
      if (now - lastFpsCheck >= 1000) {
        const sec = (now - lastFpsCheck) / 1000
        fps = frames / sec
        frames = 0
        lastFpsCheck = now
        if (fps < 50 && renderScale > 0.6) {
          renderScale = Math.max(0.6, renderScale - 0.1)
          setSize()
        } else if (fps > 58 && renderScale < 1.0) {
          highFpsSeconds += 1
          if (highFpsSeconds >= 2) {
            renderScale = Math.min(1.0, renderScale + 0.05)
            highFpsSeconds = 0
            setSize()
          }
        } else {
          highFpsSeconds = 0
        }
        if (fps < 28) targetFps = 30
        else if (fps > 55) targetFps = 60
      }
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)

    const onVis = () => {
      const hidden = (document as Document).hidden
      if (hidden) {
        if (rafId) cancelAnimationFrame(rafId)
        rafId = 0
      } else if (!rafId) {
        lastDraw = performance.now()
        rafId = requestAnimationFrame(render)
      }
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', onVis)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        // Oceanic gradient fallback
        background:
          'radial-gradient(1000px 600px at 50% 0%, rgba(20, 120, 120, 0.08), rgba(0,0,0,0)),' +
          'radial-gradient(800px 500px at 20% 10%, rgba(30, 160, 160, 0.06), rgba(0,0,0,0)),' +
          'linear-gradient(180deg, #02050a 0%, #05141A 60%, #03060b 100%)',
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
          backgroundColor: 'transparent',
        }}
      />
    </div>
  )
}

export default KelpBackground
