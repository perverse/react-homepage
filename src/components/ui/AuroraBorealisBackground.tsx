import React, { useRef, useEffect } from 'react';

// Aurora Borealis WebGL Canvas Background
const AuroraBorealisBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial size and handle resize with DPR
    let renderScale = 0.9; // adaptive internal scale (0.6..1.0)
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const setSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = Math.floor(width * dpr * renderScale);
      canvas.height = Math.floor(height * dpr * renderScale);
    };
    setSize();
    window.addEventListener('resize', setSize);

    const gl = (canvas.getContext('webgl', {
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      // @ts-ignore vendor-specific but safe to pass
      powerPreference: 'high-performance',
      // @ts-ignore experimental hint
      desynchronized: true,
    } as any) || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) {
      console.warn('WebGL not supported, Aurora background disabled');
      return () => window.removeEventListener('resize', setSize);
    }

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `;

    // Fragment shader (enhanced aurora effect: green + pink bands, darker sky, stars, organic waves)
  const fragmentShaderSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      // Hash and noise helpers
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        // Reduce octaves from 5 to 4 for performance
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = p * 2.02 + vec2(37.2, 11.7);
          a *= 0.5;
        }
        return v;
      }

      // Compute a flowing aurora band intensity
      float auroraBand(vec2 uv, float t, float yBase, float thickness, float scale, float speed, float curve) {
        // Domain warp for organic motion (no horizontal drift)
        vec2 q = uv * scale;
        q.y += sin(t * 0.5) * (0.18 * speed);
        float w = fbm(q + vec2(0.0, t * 0.05));

        // Wavy baseline anchored in x; animate amplitude only (no phase scroll)
        float amp = 0.14 * (0.6 + 0.4 * sin(t * 0.4));
        float baseWave = sin(uv.x * 2.2);
        float harmonic = 0.5 * sin(uv.x * 5.1 + 0.6 * sin(t * 0.3));
        float baseline = yBase + amp * (baseWave + harmonic) + 0.14 * w;

        // Distance from baseline, shaped into a band with soft edges
        float d = (uv.y - baseline);
  // Add gentle vertical sway without lateral movement (remove extra fbm flutter for perf)
        d += 0.03 * sin(uv.y * 5.0 + t * 0.7);

        // Local thickness modulation for variation
        float localThick = thickness * mix(0.7, 1.3, fbm(uv * 3.0 + t * 0.2));
        float ridge = exp(-pow(abs(d) * curve, 2.0) / max(1e-3, localThick));
        
  // Add vertical streaks (use single noise instead of fbm for perf)
  float streaks = smoothstep(0.35, 1.0, noise(vec2(uv.x * 9.0, uv.y * 2.0 + t * 0.6)));
        ridge *= mix(0.8, 1.7, streaks);
        return ridge;
      }

      // Simple starfield using hashed pixel coords
      float stars(vec2 fragCoord) {
        float s = fract(sin(dot(floor(fragCoord), vec2(12.9898, 78.233))) * 43758.5453);
        // Sparse stars with varied brightness
        float m = step(0.9975, s) * smoothstep(0.9975, 1.0, s);
        return m * 0.8;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float t = u_time;

        // Maintain aspect-correct radial computations
        vec2 pq = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;

        // Darker midnight sky gradient (top darker)
        float skyGrad = smoothstep(1.0, -0.2, uv.y);
        vec3 skyTop = vec3(0.01, 0.02, 0.05);
        vec3 skyBottom = vec3(0.02, 0.04, 0.10);
        vec3 col = mix(skyBottom, skyTop, skyGrad);

        // Two aurora bands: green and pink, at different baselines and flows
  float bandG = auroraBand(uv, t, 0.45, 0.090, 2.0, 0.10, 3.5);
  float bandG2 = auroraBand(uv + vec2(0.05, -0.02), t, 0.58, 0.075, 1.6, 0.08, 3.0) * 0.95;
  float bandP = auroraBand(uv + vec2(0.02, 0.0), t + 10.0, 0.33, 0.085, 2.4, 0.12, 4.0);
  float bandP2 = auroraBand(uv + vec2(-0.04, 0.0), t + 20.0, 0.22, 0.070, 2.0, 0.10, 3.6) * 1.0;

        // Color ramps with altitude-based fading
        vec3 green = vec3(0.20, 0.95, 0.60);
        vec3 pink  = vec3(0.95, 0.40, 0.80);
        float altitude = smoothstep(0.1, 0.8, uv.y);

  float gI = (bandG + bandG2);
  float pI = (bandP + bandP2);
  vec3 gCol = green * gI * mix(0.7, 1.5, altitude);
  vec3 pCol = pink  * pI * mix(0.7, 1.5, altitude);

        // Slight color bleed and soft bloom
  float bloom = smoothstep(0.3, 1.2, gI + pI);
  vec3 aurora = gCol + pCol + 0.22 * bloom * (green * 0.5 + pink * 0.5);

  // Ambient top glow so it's never completely dark
  float topGlow = smoothstep(0.5, 1.0, uv.y) * 0.12;
  aurora += topGlow * (green * 0.25 + pink * 0.15);

        // Vignette to keep focus center-top
        float vig = smoothstep(1.2, 0.2, length(pq));

        // Stars (very subtle)
        float star = stars(gl_FragCoord.xy);
  col = col * 0.65 + aurora + vec3(star * 0.10);
        col *= mix(0.9, 1.0, vig);

  // Tone mapping and clamp
  col = col / (1.0 + max(vec3(0.0), col));
        col = clamp(col, 0.0, 1.0);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(type: number, source: string) {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) {
      window.removeEventListener('resize', setSize);
      return;
    }
    const program = gl.createProgram();
    if (!program) {
      window.removeEventListener('resize', setSize);
      return;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      window.removeEventListener('resize', setSize);
      return;
    }
  gl.useProgram(program);
  // Ensure nothing gets culled/occluded and clear to black
  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.CULL_FACE);
  gl.clearColor(0, 0, 0, 1);

    // Set up geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1,
      ]),
      gl.STATIC_DRAW
    );
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
  const timeLocation = gl.getUniformLocation(program, 'u_time');
  const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    if (!timeLocation || !resolutionLocation) {
      window.removeEventListener('resize', setSize);
      return;
    }

  // Animation loop
  let rafId = 0;
  const start = performance.now();
  let lastDraw = start;
  let frames = 0;
  let fps = 60;
  let targetFps = 60;
  let lastFpsCheck = start;
  let highFpsSeconds = 0;

  // Draw an initial frame immediately to minimize first-paint delay
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform1f(timeLocation, 0.0);
  gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6);

    const render = (now: number) => {
      if (!canvas || !gl) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Throttle to target FPS
      const minDelta = 1000 / targetFps;
      const delta = now - lastDraw;
      if (delta < minDelta) {
        rafId = requestAnimationFrame(render);
        return;
      }
      // Ensure canvas matches window and current scale (in case DPR changed)
      const targetW = Math.floor(width * dpr * renderScale);
      const targetH = Math.floor(height * dpr * renderScale);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(timeLocation, (now - start) * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      lastDraw = now;
      // FPS tracking and adaptive quality
      frames++;
      if (now - lastFpsCheck >= 1000) {
        const sec = (now - lastFpsCheck) / 1000;
        fps = frames / sec;
        frames = 0;
        lastFpsCheck = now;
        // Adjust internal render scale
        if (fps < 50 && renderScale > 0.6) {
          renderScale = Math.max(0.6, renderScale - 0.1);
          setSize();
        } else if (fps > 58 && renderScale < 1.0) {
          highFpsSeconds += 1;
          if (highFpsSeconds >= 2) {
            renderScale = Math.min(1.0, renderScale + 0.05);
            highFpsSeconds = 0;
            setSize();
          }
        } else {
          highFpsSeconds = 0;
        }
        // Adjust target FPS if severely constrained
        if (fps < 28) targetFps = 30;
        else if (fps > 55) targetFps = 60;
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    // Pause rendering when tab is hidden
    const onVis = () => {
  const hidden = (document as Document).hidden;
  if (hidden) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (!rafId) {
        lastDraw = performance.now();
        rafId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', onVis);

    // Cleanup
    return () => {
  if (rafId) cancelAnimationFrame(rafId);
  document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        // Soft aurora-like gradient as a CSS fallback before WebGL draws
        background:
          'radial-gradient(1200px 600px at 70% 10%, rgba(51, 242, 153, 0.10), rgba(0,0,0,0)),' +
          'radial-gradient(900px 500px at 30% 5%, rgba(255, 122, 203, 0.08), rgba(0,0,0,0)),' +
          'linear-gradient(180deg, #04060a 0%, #03050a 50%, #02030A 100%)',
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
  );
};

export default AuroraBorealisBackground;
