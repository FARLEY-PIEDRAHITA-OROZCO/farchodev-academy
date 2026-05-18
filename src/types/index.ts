export type CourseCategory = "frontend" | "backend" | "qa" | "security" | "devops" | "mobile" | "data"

export type CourseLevel = "beginner" | "intermediate" | "advanced"

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  category: CourseCategory
  level: CourseLevel
  duration: string
  lessons: number
  students: number
  rating: number
  instructor: Instructor
  thumbnail: string
  tags: string[]
  price: number
  discountPrice?: number
  progress?: number
  curriculum: CurriculumSection[]
}

export interface CurriculumSection {
  id: string
  title: string
  lessons: Lesson[]
}

export type LessonContent =
  | { type: "text"; body: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "tip"; body: string }

export interface Lesson {
  id: string
  title: string
  duration: string
  content?: LessonContent[]
  videoUrl?: string
  isFree?: boolean
  completed?: boolean
}

export interface Instructor {
  id: string
  name: string
  avatar: string
  role: string
  bio: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: "student" | "admin"
  joinedAt: string
  streak: number
  totalHours: number
  completedCourses: number
  certifications: number
}

export interface StudentStats {
  enrolledCourses: number
  completedLessons: number
  totalHours: number
  streak: number
  streakGoal: number
  achievements: number
  certificates: number
}

export interface Activity {
  id: string
  type: "course" | "lesson" | "certificate" | "achievement"
  title: string
  description: string
  timestamp: string
  icon?: string
}

export interface Roadmap {
  id: string
  title: string
  description: string
  category: CourseCategory
  nodes: RoadmapNode[]
  totalCourses: number
  estimatedDuration: string
}

export interface RoadmapNode {
  id: string
  title: string
  description: string
  courses: string[]
  completed?: boolean
  locked?: boolean
}

export interface CommunityPost {
  id: string
  author: {
    name: string
    avatar: string
    role: string
  }
  content: string
  likes: number
  comments: number
  timestamp: string
  tags: string[]
}

export interface Certificate {
  id: string
  title: string
  courseName: string
  issuedAt: string
  expiresAt?: string
  credentialUrl: string
  imageUrl?: string
}
