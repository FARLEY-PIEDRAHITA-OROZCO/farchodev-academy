"use client"

import { use } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Clock,
  Users,
  Star,
  Play,
  FileText,
  CheckCircle,
  Lock,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { courses } from "@/data"
import { useState } from "react"

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-xl font-semibold">Curso no encontrado</h2>
        <Link href="/courses">
          <Button variant="outline">Volver a cursos</Button>
        </Link>
      </div>
    )
  }

  return <CourseDetail course={course} />
}

function CourseDetail({
  course,
}: {
  course: (typeof courses)[0]
}) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([course.curriculum[0]?.id])
  )

  const toggleSection = (id: string) => {
    const next = new Set(expandedSections)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setExpandedSections(next)
  }

  const totalDuration = course.curriculum
    .flatMap((s) => s.lessons)
    .reduce((acc, l) => {
      const mins = parseInt(l.duration)
      return acc + (isNaN(mins) ? 0 : mins)
    }, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/courses" className="hover:text-foreground transition-colors">
                Cursos
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{course.title}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {course.longDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge
                variant={
                  course.level === "beginner"
                    ? "success"
                    : course.level === "intermediate"
                    ? "warning"
                    : "destructive"
                }
                className="uppercase text-[10px] tracking-wider"
              >
                {course.level === "beginner"
                  ? "Principiante"
                  : course.level === "intermediate"
                  ? "Intermedio"
                  : "Avanzado"}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                {course.students} estudiantes
              </span>
              <span className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 text-amber-400" />
                {course.rating}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {course.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-6">Contenido del curso</h2>
            <div className="space-y-3">
              {course.curriculum.map((section) => {
                const isExpanded = expandedSections.has(section.id)
                const completedCount = section.lessons.filter((l) => l.completed).length
                return (
                  <Card key={section.id} className="overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronDown
                          className={`h-4 w-4 text-muted-foreground transition-transform ${
                            isExpanded ? "rotate-0" : "-rotate-90"
                          }`}
                        />
                        <div>
                          <h3 className="text-sm font-medium">{section.title}</h3>
                          <p className="text-xs text-muted-foreground">
                            {section.lessons.length} lecciones
                            {completedCount > 0 && ` · ${completedCount} completadas`}
                          </p>
                        </div>
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="border-t border-white/5">
                        {section.lessons.map((lesson, i) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              {lesson.completed ? (
                                <CheckCircle className="h-4 w-4 text-emerald-400" />
                              ) : lesson.isFree ? (
                                <Play className="h-4 w-4 text-cyan-400" />
                              ) : (
                                <FileText className="h-4 w-4 text-muted-foreground" />
                              )}
                              <div>
                                <span className="text-sm">{lesson.title}</span>
                                {lesson.isFree && (
                                  <Badge
                                    variant="default"
                                    className="ml-2 text-[9px] uppercase tracking-wider"
                                  >
                                    Gratis
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">
                                {lesson.duration}
                              </span>
                              {lesson.completed && (
                                <CheckCircle className="h-3 w-3 text-emerald-400" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Instructor</h2>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-cyan-400/10 text-cyan-400">
                  {course.instructor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{course.instructor.name}</h3>
                <p className="text-sm text-muted-foreground">{course.instructor.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{course.instructor.bio}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 flex items-center justify-center">
                <Play className="h-16 w-16 text-cyan-400/50" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">
                    ${course.discountPrice || course.price}
                  </span>
                  {course.discountPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${course.price}
                    </span>
                  )}
                </div>

                <Link href={`/learn/${course.id}/${course.curriculum[0].lessons[0].id}`}>
                  <Button className="w-full" size="lg">
                    <Play className="h-4 w-4" />
                    Comenzar curso
                  </Button>
                </Link>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Duración</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Lecciones</span>
                    <span>{course.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Nivel</span>
                    <span className="capitalize">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Acceso</span>
                    <span>Completo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
