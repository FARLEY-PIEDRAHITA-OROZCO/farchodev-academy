"use client"

import { useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const PALETTE = ["#22d3ee", "#06b6d4", "#3b82f6", "#818cf8", "#a78bfa"]
const SPREAD = 6

function createGlowTexture() {
  if (typeof document === "undefined") return null
  const canvas = document.createElement("canvas")
  canvas.width = 32
  canvas.height = 32
  const ctx = canvas.getContext("2d")!
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
  g.addColorStop(0, "rgba(255,255,255,1)")
  g.addColorStop(0.15, "rgba(255,255,255,0.8)")
  g.addColorStop(0.5, "rgba(255,255,255,0.15)")
  g.addColorStop(1, "rgba(255,255,255,0)")
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 32, 32)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function createCodeTexture() {
  if (typeof document === "undefined") return null
  const canvas = document.createElement("canvas")
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, 64, 64)
  ctx.fillStyle = "#ffffff"
  ctx.font = `500 ${40}px "JetBrains Mono", "Consolas", monospace`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.shadowColor = "#ffffff"
  ctx.shadowBlur = 12
  ctx.fillText("</>", 32, 32)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function generateParticles(count: number, zOffset: number, spreadMul: number) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const radius = Math.pow(Math.random(), 1.4) * SPREAD * spreadMul
    const angle = Math.random() * Math.PI * 2
    const height = (Math.random() - 0.5) * SPREAD * 0.4

    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = height
    positions[i * 3 + 2] = Math.sin(angle) * radius * 0.5 + zOffset

    const c = new THREE.Color(PALETTE[Math.floor(Math.random() * PALETTE.length)])
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))
  return geo
}

const LAYERS = [
  { count: 600, size: 0.035, zOffset: -1.8, spreadMul: 1.3, speed: 0.001, parallax: 0.15, opacityMul: 0.7 },
  { count: 500, size: 0.055, zOffset: 0, spreadMul: 1, speed: 0.002, parallax: 0.35, opacityMul: 0.95 },
  { count: 400, size: 0.08, zOffset: 1.8, spreadMul: 0.8, speed: 0.003, parallax: 0.55, opacityMul: 1.2 },
]

function ParticleLayer({
  config,
  mouseRef,
  glowTexture,
  baseOpacity,
}: {
  config: typeof LAYERS[number]
  mouseRef: React.RefObject<{ x: number; y: number }>
  glowTexture: THREE.Texture | null
  baseOpacity: number
}) {
  const pointsRef = useRef<THREE.Points>(null)
  const rotationRef = useRef(0)
  const geometry = useMemo(
    () => generateParticles(config.count, config.zOffset, config.spreadMul),
    []
  )

  useFrame((state) => {
    if (!pointsRef.current) return
    rotationRef.current += config.speed
    pointsRef.current.rotation.y = rotationRef.current
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.02
    pointsRef.current.position.x = mouseRef.current.x * config.parallax
    pointsRef.current.position.y = mouseRef.current.y * config.parallax
  })

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={config.size}
        map={glowTexture ?? undefined}
        vertexColors
        transparent
        opacity={baseOpacity * config.opacityMul}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function CodeSprites({
  mouseRef,
  codeTexture,
}: {
  mouseRef: React.RefObject<{ x: number; y: number }>
  codeTexture: THREE.Texture | null
}) {
  const groupRef = useRef<THREE.Group>(null)
  const rotationRef = useRef(0)

  const spriteData = useMemo(() => {
    const data: { position: [number, number, number]; color: string; scale: number }[] = []
    for (let i = 0; i < 80; i++) {
      const radius = Math.pow(Math.random(), 1.3) * SPREAD * 0.7
      const angle = Math.random() * Math.PI * 2
      data.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * SPREAD * 0.3,
          Math.sin(angle) * radius * 0.5 + (Math.random() - 0.5) * 1.5,
        ],
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        scale: 0.1 + Math.random() * 0.12,
      })
    }
    return data
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    rotationRef.current += 0.0015
    groupRef.current.rotation.y = rotationRef.current
    groupRef.current.position.x = mouseRef.current.x * 0.25
    groupRef.current.position.y = mouseRef.current.y * 0.25
  })

  if (!codeTexture) return null

  return (
    <group ref={groupRef}>
      {spriteData.map((s, i) => (
        <sprite key={i} position={s.position} scale={[s.scale, s.scale, 1]}>
          <spriteMaterial
            map={codeTexture}
            color={s.color}
            transparent
            opacity={0.55}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
      ))}
    </group>
  )
}

function Scene({ opacity: baseOpacity }: { opacity: number }) {
  const mouseRef = useRef({ x: 0, y: 0 })
  const glowTexture = useMemo(() => createGlowTexture(), [])
  const codeTexture = useMemo(() => createCodeTexture(), [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (
    <>
      {LAYERS.map((config, i) => (
        <ParticleLayer
          key={i}
          config={config}
          mouseRef={mouseRef}
          glowTexture={glowTexture}
          baseOpacity={baseOpacity}
        />
      ))}
      <CodeSprites mouseRef={mouseRef} codeTexture={codeTexture} />
    </>
  )
}

interface CodeNebulaProps {
  theme: "dark" | "light"
}

export function CodeNebula({ theme }: CodeNebulaProps) {
  const isDark = theme === "dark"
  const opacity = isDark ? 1.0 : 0.55
  const bgGlow = isDark
    ? "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.08) 0%, transparent 70%)"
    : "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.03) 0%, transparent 70%)"

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0, background: bgGlow }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50, near: 0.1, far: 15 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Scene opacity={opacity} />
      </Canvas>
    </div>
  )
}
