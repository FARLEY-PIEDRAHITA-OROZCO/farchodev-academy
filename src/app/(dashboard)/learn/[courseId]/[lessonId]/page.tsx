"use client"

import Link from "next/link"
import { use, useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Circle,
  FileText,
  Menu,
  X,
  ArrowLeft,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LessonRenderer } from "@/components/molecules/lesson-renderer"
import { courses } from "@/data"

const PROGRESS_KEY = "academy_progress"

function getProgress(): Record<string, boolean> {
  if (typeof window === "undefined") return {}
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}")
  } catch {
    return {}
  }
}

function saveProgress(id: string, completed: boolean) {
  const current = getProgress()
  if (completed) {
    current[id] = true
  } else {
    delete current[id]
  }
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(current))
}

export default function LearnPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>
}) {
  const { courseId, lessonId } = use(params)
  const course = courses.find((c) => c.id === courseId)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [completed, setCompleted] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setCompleted(getProgress())
  }, [])

  const allLessons = course?.curriculum.flatMap((s) => s.lessons) ?? []
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId)
  const lesson = allLessons[currentIndex]

  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  const isCompleted = completed[lessonId] ?? false
  const completedCount = allLessons.filter((l) => completed[l.id]).length
  const progressValue = allLessons.length > 0 ? (completedCount / allLessons.length) * 100 : 0
  const allDone = completedCount === allLessons.length && allLessons.length > 0

  const toggleComplete = useCallback(() => {
    const next = !completed[lessonId]
    saveProgress(lessonId, next)
    setCompleted((prev) => ({ ...prev, [lessonId]: next }))
  }, [lessonId, completed])

  if (!course || !lesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-xl font-semibold">Lección no encontrada</h2>
        <Link href="/courses">
          <Button variant="outline">Volver a cursos</Button>
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col lg:flex-row gap-0 -mx-4 -mt-8 min-h-[calc(100vh-4rem)]"
    >
      <div className="flex-1 flex flex-col min-w-0">
        <div className="relative bg-black/40 flex items-center justify-center aspect-video border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5" />
          <div className="relative z-10 text-center">
            <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-cyan-400/20 border border-cyan-400/30 cursor-pointer hover:bg-cyan-400/30 transition-all shadow-[0_0_40px_hsl(var(--primary)/0.15)] group">
              <Play className="h-8 w-8 text-cyan-400 ml-0.5 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">Reproducir video de la lección</p>
          </div>
          <div className="absolute bottom-3 left-3">
            <Badge variant="secondary" className="text-[10px] bg-background/80 backdrop-blur-sm">
              Lección {currentIndex + 1} de {allLessons.length}
            </Badge>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute top-3 right-3 flex lg:hidden h-8 w-8 items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground border border-white/10"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="mb-2">
              <Link
                href={`/courses/${course.slug}`}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="h-3 w-3" />
                Volver al curso
              </Link>
            </div>

            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="min-w-0">
                <h1 className="text-xl lg:text-2xl font-bold tracking-tight mb-1">
                  {lesson.title}
                </h1>
                <p className="text-xs text-muted-foreground">
                  {course.title} · {lesson.duration}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {prevLesson && (
                  <Link href={`/learn/${courseId}/${prevLesson.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
                {nextLesson && (
                  <Link href={`/learn/${courseId}/${nextLesson.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <div className="space-y-1 mb-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {completedCount} de {allLessons.length} lecciones completadas
                </span>
                <span>{Math.round(progressValue)}%</span>
              </div>
              <Progress value={progressValue} />
            </div>

            <Separator className="mb-6" />

            <div className="flex items-center gap-3 mb-8">
              <Button
                onClick={toggleComplete}
                variant={isCompleted ? "secondary" : "default"}
                size="sm"
                className="transition-all"
              >
                {isCompleted ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Completada
                  </>
                ) : (
                  <>
                    <Circle className="h-4 w-4" />
                    Marcar como completada
                  </>
                )}
              </Button>

              {nextLesson && (
                <Link href={`/learn/${courseId}/${nextLesson.id}`}>
                  <Button variant="outline" size="sm">
                    Siguiente lección
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}

              {allDone && (
                <Badge variant="success" className="animate-fade-in">
                  <Trophy className="h-3 w-3 mr-1" />
                  Curso completado
                </Badge>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={lessonId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {lesson.content ? (
                  <LessonRenderer content={lesson.content} />
                ) : (
                  <p className="text-muted-foreground text-sm">
                    El contenido de esta lección estará disponible próximamente.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            <Separator className="my-8" />

            <div className="flex items-center justify-between">
              {prevLesson ? (
                <Link href={`/learn/${courseId}/${prevLesson.id}`}>
                  <Button variant="ghost" size="sm">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    {prevLesson.title}
                  </Button>
                </Link>
              ) : (
                <div />
              )}
              {nextLesson ? (
                <Link href={`/learn/${courseId}/${nextLesson.id}`}>
                  <Button variant="ghost" size="sm">
                    {nextLesson.title}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {allDone && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-center"
              >
                <Trophy className="h-10 w-10 mx-auto text-emerald-400 mb-3" />
                <h3 className="text-lg font-semibold mb-1">
                  ¡Felicidades! Has completado el curso
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.title} — {allLessons.length} lecciones completadas
                </p>
                <Link href="/certificates">
                  <Button variant="default">
                    Ver certificado
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </ScrollArea>
      </div>

      <div
        className={`${
          sidebarOpen ? "fixed inset-0 z-50 flex" : "hidden"
        } lg:relative lg:flex lg:w-80 border-l border-white/5 bg-background/95 lg:bg-background/50 backdrop-blur-xl`}
      >
        <div className="w-full lg:w-80 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <div>
              <h3 className="text-sm font-semibold">Contenido del curso</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {allLessons.length} lecciones · {completedCount} completadas
              </p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="flex lg:hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {course.curriculum.map((section) => (
                <div key={section.id}>
                  <div className="px-3 py-2.5">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {section.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {section.lessons.length} lecciones
                      {" · "}
                      {section.lessons.filter((l) => completed[l.id]).length} completadas
                    </p>
                  </div>
                  {section.lessons.map((l) => {
                    const isCurrent = l.id === lessonId
                    const isComp = completed[l.id]
                    return (
                      <Link
                        key={l.id}
                        href={`/learn/${courseId}/${l.id}`}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                          isCurrent
                            ? "bg-cyan-400/10 text-cyan-400"
                            : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground"
                        }`}
                      >
                        {isComp ? (
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        ) : isCurrent ? (
                          <Play className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        ) : (
                          <FileText className="h-3.5 w-3.5 shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs truncate">{l.title}</p>
                          <p className="text-[10px] opacity-60">{l.duration}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  )
}
