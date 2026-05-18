"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import {
  Users,
  BookOpen,
  DollarSign,
  Star,
  TrendingUp,
  Activity,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedCounter } from "@/components/atoms/animated-counter"
import { CardTilt } from "@/components/molecules/card-tilt"
import { adminStats } from "@/data"

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function BarChart({
  data,
}: {
  data: { name: string; students: number; revenue: number; growth: number }[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const maxStudents = Math.max(...data.map((d) => d.students))

  return (
    <div ref={ref} className="space-y-4">
      {data.map((course, i) => (
        <div key={i} className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium truncate flex-1">{course.name}</span>
            <Badge variant="success" className="text-[10px] ml-2 shrink-0">
              +{course.growth}%
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${(course.students / maxStudents) * 100}%` } : {}}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="text-xs text-muted-foreground w-16 text-right shrink-0">
              {course.students.toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AdminPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Panel de Administración</h1>
        <p className="text-muted-foreground mt-1">Gestión general de la plataforma</p>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <motion.div variants={item}>
          <CardTilt>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Estudiantes totales
                  </span>
                  <Users className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={adminStats.totalStudents} duration={2} />
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-emerald-400" />
                  <span className="text-xs text-emerald-400">+12% este mes</span>
                </div>
              </CardContent>
            </Card>
          </CardTilt>
        </motion.div>

        <motion.div variants={item}>
          <CardTilt>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Cursos activos
                  </span>
                  <BookOpen className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={adminStats.totalCourses} duration={2} />
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-emerald-400" />
                  <span className="text-xs text-emerald-400">+3 este mes</span>
                </div>
              </CardContent>
            </Card>
          </CardTilt>
        </motion.div>

        <motion.div variants={item}>
          <CardTilt>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Ingresos totales
                  </span>
                  <DollarSign className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold">
                  $<AnimatedCounter value={adminStats.totalRevenue} duration={2} />
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-emerald-400" />
                  <span className="text-xs text-emerald-400">+8% este mes</span>
                </div>
              </CardContent>
            </Card>
          </CardTilt>
        </motion.div>

        <motion.div variants={item}>
          <CardTilt>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Rating promedio
                  </span>
                  <Star className="h-4 w-4 text-amber-400" />
                </div>
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={adminStats.averageRating * 10} duration={2} decimals={1} divider={10} />
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-emerald-400" />
                  <span className="text-xs text-emerald-400">+0.2 este mes</span>
                </div>
              </CardContent>
            </Card>
          </CardTilt>
        </motion.div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
              Tasa de finalización
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Completados</span>
              <span className="text-sm font-semibold">
                <AnimatedCounter value={adminStats.completionRate} duration={2} suffix="%" />
              </span>
            </div>
            <div className="relative">
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${adminStats.completionRate}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{adminStats.activeStudents.toLocaleString()} estudiantes activos</span>
              <span>{Math.round(adminStats.totalStudents * (adminStats.completionRate / 100))} completados</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
              Actividad reciente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { action: "Nuevo estudiante", detail: "María García se ha inscrito", time: "Hace 10 min" },
              { action: "Curso completado", detail: "Juan Pérez completó QA Automation", time: "Hace 1 h" },
              { action: "Nuevo curso", detail: "DevOps Cloud Essentials publicado", time: "Hace 3 h" },
              { action: "Review", detail: "Nueva reseña de 5 estrellas", time: "Hace 5 h" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
            Cursos populares
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={[
              { name: "Desarrollo Web Moderno", students: 2847, revenue: 142350, growth: 15 },
              { name: "QA Automation con Playwright", students: 1523, revenue: 76150, growth: 22 },
              { name: "Backend con Node.js", students: 2134, revenue: 106700, growth: 12 },
              { name: "Ciberseguridad para Developers", students: 987, revenue: 49350, growth: 8 },
            ]}
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}
