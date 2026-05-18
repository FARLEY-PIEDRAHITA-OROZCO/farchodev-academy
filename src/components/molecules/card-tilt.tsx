"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface CardTiltProps {
  children: React.ReactNode
  className?: string
}

export function CardTilt({ children, className }: CardTiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowX, setGlowX] = useState(50)
  const [glowY, setGlowY] = useState(50)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setRotateX((y - 0.5) * -10)
    setRotateY((x - 0.5) * 10)
    setGlowX(x * 100)
    setGlowY(y * 100)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlowX(50)
    setGlowY(50)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        position: "relative",
      }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(34,211,238,0.12) 0%, transparent 60%)`,
          opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
        }}
      />
    </motion.div>
  )
}
