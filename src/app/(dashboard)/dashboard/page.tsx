"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import {
  BookOpen,
  Clock,
  Award,
  Zap,
  Flame,
  TrendingUp,
  ChevronRight,
  Play,
  BarChart3,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/atoms/animated-counter"
import { CardTilt } from "@/components/molecules/card-tilt"
import { ProgressRing } from "@/components/molecules/progress-ring"
import { courses, studentStats, recentActivities, weekProgress } from "@/data"
import { currentUser } from "@/data/users"

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

function StreakSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Card ref={ref}>
      <CardHeader>
        <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
          Racha de estudio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center gap-4 py-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
          >
            <Flame className="h-10 w-10 text-amber-400" />
          </motion.div>
          <div>
            <motion.div
              className="text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedCounter value={studentStats.streak} duration={1.5} />
            </motion.div>
            <div className="text-xs text-muted-foreground">días consecutivos</div>
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        >
          <Progress value={(studentStats.streak / studentStats.streakGoal) * 100} />
        </motion.div>
        <motion.p
          className="text-xs text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          Meta: {studentStats.streakGoal} días — Te faltan {studentStats.streakGoal - studentStats.streak}
        </motion.p>
      </CardContent>
    </Card>
  )
}

function ActivityFeed() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
          Actividad reciente
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {recentActivities.map((activity, i) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 shrink-0">
              {activity.type === "lesson" && <Play className="h-4 w-4 text-cyan-400" />}
              {activity.type === "achievement" && <Award className="h-4 w-4 text-amber-400" />}
              {activity.type === "course" && <BookOpen className="h-4 w-4 text-blue-400" />}
              {activity.type === "certificate" && (
                <Award className="h-4 w-4 text-emerald-400" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">
              {activity.timestamp}
            </span>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  const inProgress = courses.filter((c) => c.progress && c.progress > 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
            Bienvenido, {currentUser.name}
          </h1>
          <p className="text-muted-foreground mt-1">
            Aquí está el resumen de tu progreso
          </p>
        </div>
        <Link href="/learn/1/1">
          <Button>
            <Play className="h-4 w-4" />
            Continuar aprendiendo
          </Button>
        </Link>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {[
          { label: "Cursos inscritos", value: studentStats.enrolledCourses, icon: BookOpen },
          { label: "Lecciones completadas", value: studentStats.completedLessons, icon: BarChart3 },
          { label: "Horas totales", value: studentStats.totalHours, icon: Clock, suffix: "h" },
          { label: "Logros", value: studentStats.achievements, icon: Award },
        ].map((stat) => (
          <motion.div key={stat.label} variants={item}>
            <CardTilt>
              <Card className="hover:border-cyan-400/20 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <stat.icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold">
                    <AnimatedCounter value={stat.value as number} duration={2} />
                    {"suffix" in stat ? ` ${stat.suffix}` : ""}
                  </div>
                </CardContent>
              </Card>
            </CardTilt>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <ActivityFeed />
        <StreakSection />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Continúa tu aprendizaje</h2>
          <Link
            href="/courses"
            className="text-sm text-cyan-400 hover:underline flex items-center gap-1"
          >
            Ver todos <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {inProgress.map((course) => (
            <motion.div key={course.id} variants={item}>
              <Link href={`/courses/${course.slug}`}>
                <CardTilt>
                  <Card className="group cursor-pointer hover:border-cyan-400/30 transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {course.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{course.duration}</span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                        {course.title}
                      </h3>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Progreso</span>
                          <span className="text-cyan-400">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                    </CardContent>
                  </Card>
                </CardTilt>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
