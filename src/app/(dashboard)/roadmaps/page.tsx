"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Lock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { roadmaps } from "@/data"
import type { RoadmapNode, Roadmap } from "@/types"
import Link from "next/link"

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const nodeItem: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function RoadmapNode({
  node,
  ni,
  total,
}: {
  node: RoadmapNode
  ni: number
  total: number
}) {
  const isLast = ni === total - 1

  return (
    <motion.div
      variants={nodeItem}
      className="flex gap-4 pb-8 last:pb-0 relative"
    >
      {/* Connecting line */}
      {!isLast && (
        <motion.div
          className="absolute left-[15px] top-8 bottom-0 w-px"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: ni * 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top", background: "linear-gradient(to bottom, hsl(var(--border)), hsl(var(--border)))" }}
        />
      )}

      {/* Icon */}
      <div className="relative shrink-0">
        {node.completed ? (
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: ni * 0.12 }}
          >
            <motion.div
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, delay: ni * 0.3 }}
            >
              <CheckCircle className="h-4 w-4 text-emerald-400" />
            </motion.div>
          </motion.div>
        ) : node.locked ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted border border-border">
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        ) : (
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 border border-cyan-400/40"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: ni * 0.12 }}
          >
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-cyan-400"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: ni * 0.3 }}
            />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <motion.div
        className="flex-1 min-w-0 pt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: ni * 0.12 + 0.15, duration: 0.4 }}
      >
        <div className="flex items-center justify-between">
          <h4
            className={`text-sm font-medium ${node.locked ? "text-muted-foreground" : ""}`}
          >
            {node.title}
          </h4>
          {node.locked && (
            <Badge variant="secondary" className="text-[9px]">
              Bloqueado
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">
          {node.description}
        </p>
        {node.courses.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {node.courses.map((cid) => (
              <Badge
                key={cid}
                variant="outline"
                className="text-[9px] text-muted-foreground"
              >
                Curso relacionado
              </Badge>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

function RoadmapCard({
  roadmap,
  ri,
}: {
  roadmap: Roadmap
  ri: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const completed = roadmap.nodes.filter((n) => n.completed).length
  const total = roadmap.nodes.length
  const pct = (completed / total) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: ri * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="overflow-hidden" ref={ref}>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider">
              {roadmap.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {roadmap.estimatedDuration}
            </span>
          </div>
          <CardTitle className="text-xl">{roadmap.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{roadmap.description}</p>
        </CardHeader>
        <CardContent>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {roadmap.nodes.map((node, ni) => (
              <RoadmapNode key={node.id} node={node} ni={ni} total={roadmap.nodes.length} />
            ))}
          </motion.div>

          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-muted-foreground">
                {completed} de {total} completados
              </span>
              <Button variant="ghost" size="sm" className="text-cyan-400">
                Continuar <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
            <div className="relative">
              {/* Animated bar */}
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${pct}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function RoadmapsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Roadmaps</h1>
        <p className="text-muted-foreground mt-1">
          Rutas de aprendizaje guiadas para alcanzar tus objetivos profesionales
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {roadmaps.map((roadmap, ri) => (
          <RoadmapCard key={roadmap.id} roadmap={roadmap} ri={ri} />
        ))}
      </div>
    </motion.div>
  )
}
