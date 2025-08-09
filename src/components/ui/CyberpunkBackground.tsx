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
    
    // Draw line segments for each building transition
    for (float i = startBuilding; i <= endBuilding; i += 1.0) {
      float x1 = i * buildingWidth - scroll;
      float x2 = (i + 1.0) * buildingWidth - scroll;
      
      float h1 = buildingHeight(i);
      float h2 = buildingHeight(i + 1.0);
      
      // Only draw if segment is potentially visible
      if (x2 >= -0.1 && x1 <= 1.1) {
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
    
    // Final color
    vec3 color = mix(bgColor, lineColor, line);
    
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function CyberpunkBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current!
    const scene = new THREE.Scene()

    // Get initial size
    const width = window.innerWidth
    const height = window.innerHeight

    // Camera setup
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: false,
      powerPreference: "high-performance"
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
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
      
      renderer.setSize(newWidth, newHeight)
      material.uniforms.uResolution.value.set(newWidth, newHeight)
    }
    window.addEventListener('resize', onResize)

    // Animation loop
    const startTime = performance.now()
    const animate = () => {
      const currentTime = performance.now()
      const elapsed = (currentTime - startTime) / 1000.0
      
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = elapsed
      }
      
      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', onResize)
      
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