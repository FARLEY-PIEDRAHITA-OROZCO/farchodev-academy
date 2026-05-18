"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { Search, Clock, Users, Star, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CardTilt } from "@/components/molecules/card-tilt"
import { courses } from "@/data"
import type { CourseCategory } from "@/types"

const categories: { value: CourseCategory | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "qa", label: "QA" },
  { value: "security", label: "Seguridad" },
  { value: "devops", label: "DevOps" },
  { value: "data", label: "Data" },
]

const categoryColors: Record<CourseCategory, string> = {
  frontend: "text-cyan-400",
  backend: "text-blue-400",
  qa: "text-emerald-400",
  security: "text-amber-400",
  devops: "text-purple-400",
  mobile: "text-pink-400",
  data: "text-rose-400",
}

const cardStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function CoursesPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<CourseCategory | "all">("all")

  const filtered = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === "all" || c.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const inProgressCourses = courses.filter((c) => c.progress && c.progress > 0 && c.progress < 100)
  const allCourses = activeCategory === "all" && !search ? courses : filtered

  const displayCourses = inProgressCourses.length > 0 && !search && activeCategory === "all"
    ? courses
    : filtered

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Cursos</h1>
            <p className="text-muted-foreground mt-1">
              Explora nuestra biblioteca de cursos
            </p>
          </div>
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar cursos..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {inProgressCourses.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              En progreso
            </h2>
            <motion.div
              variants={cardStagger}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {inProgressCourses.map((course) => (
                <motion.div key={course.id} variants={cardItem}>
                  <Link href={`/courses/${course.slug}`}>
                    <CardTilt>
                      <Card className="group cursor-pointer hover:border-cyan-400/30 transition-all duration-300">
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <Badge variant="default" className={categoryColors[course.category]}>
                              {course.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{course.duration}</span>
                          </div>
                          <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {course.students}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-amber-400" />
                              {course.rating}
                            </span>
                          </div>
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
        )}

        <Tabs
          defaultValue="all"
          onValueChange={(v) => setActiveCategory(v as CourseCategory | "all")}
        >
          <TabsList className="mb-6 flex-wrap h-auto">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div
              variants={cardStagger}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayCourses.map((course) => (
                <motion.div key={course.id} variants={cardItem}>
                  <Link href={`/courses/${course.slug}`}>
                    <CardTilt>
                      <Card className="group cursor-pointer h-full hover:border-cyan-400/30 transition-all duration-300 overflow-hidden">
                        <div className="h-40 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 flex items-center justify-center">
                          <Badge
                            variant="secondary"
                            className={`${categoryColors[course.category]} bg-transparent border-0 text-xs uppercase tracking-wider`}
                          >
                            {course.category}
                          </Badge>
                        </div>
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={course.level === "beginner" ? "success" : course.level === "intermediate" ? "warning" : "destructive"} className="text-[10px] uppercase tracking-wider">
                              {course.level === "beginner" ? "Principiante" : course.level === "intermediate" ? "Intermedio" : "Avanzado"}
                            </Badge>
                            {course.discountPrice && (
                              <Badge variant="default" className="text-[10px]">
                                -{Math.round((1 - course.discountPrice / course.price) * 100)}%
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {course.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                            {course.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {course.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-amber-400" />
                                {course.rating}
                              </span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    </CardTilt>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
