"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ProgressRingProps {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
  label?: string
}

export function ProgressRing({
  value,
  size = 80,
  strokeWidth = 6,
  color = "#22d3ee",
  label,
}: ProgressRingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          className="text-white/5"
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: isInView ? offset : circumference }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          strokeDasharray={circumference}
        />
      </svg>
      <span className="absolute flex flex-col items-center">
        <span className="text-xs font-bold">{value}%</span>
        {label && <span className="text-[8px] text-muted-foreground mt-0.5">{label}</span>}
      </span>
    </div>
  )
}
