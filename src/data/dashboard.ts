import type { StudentStats, Activity } from "@/types"

export const studentStats: StudentStats = {
  enrolledCourses: 4,
  completedLessons: 28,
  totalHours: 64,
  streak: 12,
  streakGoal: 30,
  achievements: 8,
  certificates: 2,
}

export const recentActivities: Activity[] = [
  {
    id: "a1",
    type: "lesson",
    title: "Completaste: Componentes y Props",
    description: "React y Next.js - Lección 9",
    timestamp: "Hace 2 horas",
  },
  {
    id: "a2",
    type: "achievement",
    title: "Logro desbloqueado: Racha de 7 días",
    description: "Sigue así, mantén tu racha activa",
    timestamp: "Hace 1 día",
  },
  {
    id: "a3",
    type: "course",
    title: "Nuevo curso disponible",
    description: "DevOps y Cloud Essentials ya está disponible",
    timestamp: "Hace 2 días",
  },
  {
    id: "a4",
    type: "certificate",
    title: "Certificado generado",
    description: "QA Automation con Playwright",
    timestamp: "Hace 5 días",
  },
  {
    id: "a5",
    type: "lesson",
    title: "Completaste: Async/Await y Fetch API",
    description: "JavaScript Esencial - Lección 8",
    timestamp: "Hace 1 semana",
  },
]

export const weekProgress = [
  { day: "Lun", hours: 1.5 },
  { day: "Mar", hours: 2 },
  { day: "Mié", hours: 1 },
  { day: "Jue", hours: 2.5 },
  { day: "Vie", hours: 3 },
  { day: "Sáb", hours: 0.5 },
  { day: "Dom", hours: 0 },
]

export const adminStats = {
  totalStudents: 10234,
  activeStudents: 5678,
  totalCourses: 24,
  totalRevenue: 245890,
  averageRating: 4.7,
  completionRate: 68,
}
