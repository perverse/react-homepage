import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uResolution;
  uniform float uTime;

  // Simple hash function for building heights
  float hash(float n) { 
    return fract(sin(n) * 43758.5453123); 
  }

  // Generate building height for a given building ID
  float buildingHeight(float id) {
    float baseline = 0.25; // Ground level (halfway between 0.15 and 0.35)
    
    // Every 3-6 buildings, return to baseline to establish ground (more frequent)
    float groundFreq = 3.0 + 3.0 * hash(floor(id / 5.0));
    if (mod(id, groundFreq) < 1.0) {
      return baseline;
    }
    
    // Normal building heights with minimum height difference
    float rawHeight = hash(id * 17.31);
    // Quantize to minimum steps for more building-like appearance
    float steps = 8.0; // Number of height levels
    float quantizedHeight = floor(rawHeight * steps) / steps;
    
    // Adjust building height calculation to maintain max height at ~0.9
    return baseline + 0.1 + 0.55 * quantizedHeight; // Max height remains ~0.9
  }



  // Distance to a line segment from point A to point B in screen space
  float distanceToSegment(vec2 p, vec2 a, vec2 b, vec2 resolution) {
    // Convert to screen space for consistent thickness
    vec2 screenP = p * resolution;
    vec2 screenA = a * resolution;
    vec2 screenB = b * resolution;
    
    vec2 pa = screenP - screenA;
    vec2 ba = screenB - screenA;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    float dist = length(pa - ba * h);
    
    // Convert back to UV space
    return dist / min(resolution.x, resolution.y);
  }

  // Check if point is inside a rectangle
  bool isInRect(vec2 p, vec2 center, vec2 size) {
    vec2 d = abs(p - center) - size * 0.5;
    return d.x <= 0.0 && d.y <= 0.0;
  }

  // Pseudo-random based on vec3
  float hash3(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123);
  }

  // Generate window pattern for a building
  float getWindowBrightness(vec2 uv, float buildingId, float x1, float x2, float buildingTop) {
    float baseline = 0.25;
    
    // Only draw windows if building is tall enough and not at baseline
    if (buildingTop <= baseline + 0.05) return 0.0;
    
    // First check: is the current pixel actually inside the building bounds?
    if (uv.x < x1 || uv.x > x2 || uv.y < baseline || uv.y > buildingTop) {
      return 0.0; // Outside building bounds
    }
    
    // Window grid parameters
    vec2 windowSize = vec2(0.020, 0.050); // Large window dimensions (2.5:1 ratio)
    vec2 windowSpacing = vec2(0.022, 0.055); // Tight spacing for thin separator lines
    
    // Building dimensions
    float buildingWidth = x2 - x1;
    float buildingHeight = buildingTop - baseline;
    
    // Building dimensions with padding from edges
    vec2 padding = vec2(0.015, 0.020); // Horizontal and vertical padding from building edges
    float paddedWidth = buildingWidth - 2.0 * padding.x;
    float paddedHeight = buildingHeight - 2.0 * padding.y;
    
    // Skip if building too small for padded windows
    if (paddedWidth <= 0.0 || paddedHeight <= 0.0) return 0.0;
    
    // Calculate window grid within padded area
    float windowsPerRow = floor(paddedWidth / windowSpacing.x);
    float windowRows = floor(paddedHeight / windowSpacing.y);
    
    // Skip if building too small for windows
    if (windowsPerRow < 1.0 || windowRows < 1.0) return 0.0;
    
    // Check if we're within the padded window area
    vec2 paddedStart = vec2(x1 + padding.x, baseline + padding.y);
    vec2 paddedEnd = vec2(x2 - padding.x, buildingTop - padding.y);
    
    if (uv.x < paddedStart.x || uv.x > paddedEnd.x || uv.y < paddedStart.y || uv.y > paddedEnd.y) {
      return 0.0; // Outside padded window area
    }
    
    // Convert UV to padded building-local coordinates (0-1 range within padded area)
    vec2 buildingUV = vec2(
      (uv.x - paddedStart.x) / paddedWidth,
      (uv.y - paddedStart.y) / paddedHeight
    );
    
    // Window grid coordinates
    vec2 windowGrid = buildingUV * vec2(windowsPerRow, windowRows);
    vec2 windowIndex = floor(windowGrid);
    vec2 windowLocalUV = fract(windowGrid);
    
    // Center the window in its cell
    vec2 windowCenter = vec2(0.5);
    // Calculate window size to nearly fill the grid cell, leaving thin separator lines
    vec2 cellSize = vec2(paddedWidth / windowsPerRow, paddedHeight / windowRows);
    vec2 windowHalfSize = min(windowSize / cellSize, vec2(0.95)) * 0.5; // Fill 95% of cell size for thin separators
    
    if (isInRect(windowLocalUV, windowCenter, windowHalfSize)) {
      // Seed per window cell
      float windowSeed = buildingId * 100.0 + windowIndex.x * 10.0 + windowIndex.y;
      
      // Re-randomize every 5 seconds independently per window
      float period = 5.0;
      float cycleIndex = floor(uTime / period);
      float rnd = hash3(vec3(windowSeed, cycleIndex, windowSeed * 0.13));
      
      // 35% lit, 65% dark per cycle
      bool lit = rnd > 0.65;
      
      return lit ? 0.8 : 0.35;
    }
    
    return 0.0; // Not in a window
  }

  void main() {
    vec2 uv = vUv;
    
    // Dark background
    vec3 bgColor = vec3(0.05, 0.05, 0.1);
    vec3 lineColor = vec3(0.3, 0.8, 1.0); // Cyan line
    
    // Animation parameters
    float scrollSpeed = 0.05;
    float buildingWidth = 0.1;
    
    // Current scroll position
    float scroll = uTime * scrollSpeed;
    
    // Find which buildings are visible on screen
    float startBuilding = floor((scroll - buildingWidth) / buildingWidth);
    float endBuilding = ceil((scroll + 1.0 + buildingWidth) / buildingWidth);
    
    float minDist = 1000.0;
    float windowBrightness = 0.0;
    
    // Draw line segments and windows for each building transition
    for (float i = startBuilding; i <= endBuilding; i += 1.0) {
      float x1 = i * buildingWidth - scroll;
      float x2 = (i + 1.0) * buildingWidth - scroll;
      
      float h1 = buildingHeight(i);
      float h2 = buildingHeight(i + 1.0);
      
      // Only draw if segment is potentially visible
      if (x2 >= -0.1 && x1 <= 1.1) {
        // Check for windows in this building
        float buildingWindowBrightness = getWindowBrightness(uv, i, x1, x2, h1);
        windowBrightness = max(windowBrightness, buildingWindowBrightness);
        
        // Horizontal segment (rooftop)
        vec2 hStart = vec2(x1, h1);
        vec2 hEnd = vec2(x2, h1);
        float hDist = distanceToSegment(uv, hStart, hEnd, uResolution);
        minDist = min(minDist, hDist);
        
        // Vertical segment (building edge)
        vec2 vStart = vec2(x2, h1);
        vec2 vEnd = vec2(x2, h2);
        float vDist = distanceToSegment(uv, vStart, vEnd, uResolution);
        minDist = min(minDist, vDist);
      }
    }
    
    // Line thickness and anti-aliasing (now in normalized screen space)
    float lineWidth = 3.0 / min(uResolution.x, uResolution.y);
    float aa = 1.0 / min(uResolution.x, uResolution.y);
    
    // Create the line
    float line = 1.0 - smoothstep(lineWidth - aa, lineWidth + aa, minDist);
    
    // Final color combining background, line, and windows
    vec3 color = bgColor;
    
    // Add windows first (so line can draw over them)
    if (windowBrightness > 0.0) {
      vec3 windowColor = lineColor * windowBrightness;
      color = mix(color, windowColor, windowBrightness);
    }
    
    // Add the line on top
    color = mix(color, lineColor, line);
    
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function CyberpunkBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const animationRef = useRef<number | null>(null)
  const pixelRatioRef = useRef<number>(1)
  const renderScaleRef = useRef<number>(0.95) // adaptive 0.6..1.0
  const targetFpsRef = useRef<number>(60)
  const lastDrawRef = useRef<number>(0)
  const framesRef = useRef<number>(0)
  const lastFpsCheckRef = useRef<number>(0)
  const highFpsSecondsRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current!
    const scene = new THREE.Scene()

    // Get initial size
    const width = window.innerWidth
    const height = window.innerHeight

    // Camera setup
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    // Renderer setup (disable MSAA; use adaptive pixel ratio)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
      stencil: false,
      depth: false
    })
    const basePR = Math.min(window.devicePixelRatio || 1, 1.5)
    pixelRatioRef.current = basePR * renderScaleRef.current
    renderer.setPixelRatio(pixelRatioRef.current)
  renderer.setSize(width, height, true)
    renderer.setClearColor(0x0d0d1a, 1) // Dark background fallback
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    // Create fullscreen quad
    const geometry = new THREE.PlaneGeometry(2, 2)
  const material = new THREE.ShaderMaterial({
      uniforms: {
    uResolution: { value: new THREE.Vector2(width, height) },
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      depthTest: false,
      depthWrite: false,
    })
    materialRef.current = material

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Handle window resize
    const onResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight
      const basePR = Math.min(window.devicePixelRatio || 1, 1.5)
      pixelRatioRef.current = basePR * renderScaleRef.current
  renderer.setPixelRatio(pixelRatioRef.current)
  renderer.setSize(newWidth, newHeight, true)
      // Use drawing buffer size (accounts for pixel ratio) for shader math
      const dbSize = new THREE.Vector2()
      renderer.getDrawingBufferSize(dbSize)
      material.uniforms.uResolution.value.set(dbSize.x, dbSize.y)
    }
    window.addEventListener('resize', onResize)

    // Animation loop
    const startTime = performance.now()
    lastDrawRef.current = startTime
    lastFpsCheckRef.current = startTime

    const animate = () => {
      const now = performance.now()
      const delta = now - lastDrawRef.current
      const minDelta = 1000 / targetFpsRef.current
      if (delta < minDelta) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const elapsed = (now - startTime) / 1000.0
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = elapsed
      }

      // Keep uResolution in sync in case internal size changed due to adaptive scale
      if (materialRef.current) {
        const dbSize = new THREE.Vector2()
        renderer.getDrawingBufferSize(dbSize)
        materialRef.current.uniforms.uResolution.value.set(dbSize.x, dbSize.y)
      }
      renderer.render(scene, camera)
      lastDrawRef.current = now

      // FPS tracking and adaptive quality
      framesRef.current += 1
      const sinceCheck = now - lastFpsCheckRef.current
      if (sinceCheck >= 1000) {
        const sec = sinceCheck / 1000
        const fps = framesRef.current / sec
        framesRef.current = 0
        lastFpsCheckRef.current = now

        // Adjust internal render scale (0.6..1.0)
        if (fps < 50 && renderScaleRef.current > 0.6) {
          renderScaleRef.current = Math.max(0.6, renderScaleRef.current - 0.1)
          onResize()
        } else if (fps > 58 && renderScaleRef.current < 1.0) {
          highFpsSecondsRef.current += 1
          if (highFpsSecondsRef.current >= 2) {
            renderScaleRef.current = Math.min(1.0, renderScaleRef.current + 0.05)
            highFpsSecondsRef.current = 0
            onResize()
          }
        } else {
          highFpsSecondsRef.current = 0
        }

        // Adjust FPS target if severely constrained
        if (fps < 28) targetFpsRef.current = 30
        else if (fps > 55) targetFpsRef.current = 60
      }

      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)

    // Pause when tab is hidden to save power
    const onVis = () => {
      const hidden = (document as Document).hidden
      if (hidden) {
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      } else if (!animationRef.current) {
        lastDrawRef.current = performance.now()
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    document.addEventListener('visibilitychange', onVis)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVis)
      
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      if (materialRef.current) {
        materialRef.current.dispose()
      }
      geometry.dispose()
      
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background: '#0d0d1a',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}