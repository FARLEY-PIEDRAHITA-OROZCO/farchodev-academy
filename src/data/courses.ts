import type { Course } from "@/types"
import { lessonContent } from "./lesson-content"

export const courses: Course[] = [
  {
    id: "1",
    title: "Desarrollo Web Moderno",
    slug: "desarrollo-web-moderno",
    description:
      "Aprende HTML, CSS, JavaScript, React y Next.js desde cero hasta producción.",
    longDescription:
      "Este curso te llevará desde los fundamentos del desarrollo web hasta la creación de aplicaciones modernas con React y Next.js. Aprenderás con proyectos prácticos y ejercicios del mundo real.",
    category: "frontend",
    level: "beginner",
    duration: "24 horas",
    lessons: 48,
    students: 2847,
    rating: 4.8,
    instructor: {
      id: "i1",
      name: "Farley Piedrahita",
      avatar: "/avatars/farley.jpg",
      role: "QA & Frontend Developer",
      bio: "Software Developer con experiencia en QA, frontend y ciberseguridad.",
    },
    thumbnail: "/courses/web-dev.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    price: 49.99,
    discountPrice: 29.99,
    curriculum: [
      {
        id: "s1",
        title: "Fundamentos de la Web",
        lessons: [
          { id: "l1", title: "Cómo funciona internet", duration: "15 min", isFree: true, content: lessonContent.l1 },
          { id: "l2", title: "HTML Semántico", duration: "45 min", content: lessonContent.l2 },
          { id: "l3", title: "CSS Moderno: Flexbox y Grid", duration: "60 min", content: lessonContent.l3 },
          { id: "l4", title: "Responsive Design", duration: "40 min", content: lessonContent.l4 },
        ],
      },
      {
        id: "s2",
        title: "JavaScript Esencial",
        lessons: [
          { id: "l5", title: "Variables y Tipos de Datos", duration: "30 min", isFree: true, content: lessonContent.l5 },
          { id: "l6", title: "Funciones y Scope", duration: "45 min", content: lessonContent.l6 },
          { id: "l7", title: "DOM Manipulation", duration: "50 min", content: lessonContent.l7 },
          { id: "l8", title: "Async/Await y Fetch API", duration: "55 min", content: lessonContent.l8 },
        ],
      },
      {
        id: "s3",
        title: "React y Next.js",
        lessons: [
          { id: "l9", title: "Componentes y Props", duration: "40 min", content: lessonContent.l9 },
          { id: "l10", title: "Estado y Efectos", duration: "50 min", content: lessonContent.l10 },
          { id: "l11", title: "React Router y Navegación", duration: "35 min", content: lessonContent.l11 },
          { id: "l12", title: "Next.js App Router", duration: "60 min", content: lessonContent.l12 },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "QA Automation con Playwright",
    slug: "qa-automation-playwright",
    description:
      "Domina la automatización de pruebas end-to-end con Playwright y TypeScript.",
    longDescription:
      "Aprende a escribir pruebas automatizadas robustas con Playwright. Cubre desde la instalación hasta patrones avanzados como Page Object Model, fixtures y CI/CD.",
    category: "qa",
    level: "intermediate",
    duration: "18 horas",
    lessons: 36,
    students: 1523,
    rating: 4.9,
    instructor: {
      id: "i1",
      name: "Farley Piedrahita",
      avatar: "/avatars/farley.jpg",
      role: "QA & Frontend Developer",
      bio: "QA Automation Engineer con experiencia en Playwright, Selenium y pruebas de seguridad.",
    },
    thumbnail: "/courses/qa.jpg",
    tags: ["Playwright", "TypeScript", "Testing", "E2E", "CI/CD"],
    price: 59.99,
    discountPrice: 34.99,
    curriculum: [
      {
        id: "s1",
        title: "Introducción a QA Automation",
        lessons: [
          { id: "l1", title: "¿Por qué automatizar?", duration: "20 min", isFree: true },
          { id: "l2", title: "Playwright vs Selenium", duration: "25 min" },
          { id: "l3", title: "Instalación y Configuración", duration: "30 min" },
        ],
      },
      {
        id: "s2",
        title: "Selectores y Acciones",
        lessons: [
          { id: "l4", title: "Selectores CSS y XPath", duration: "40 min", isFree: true },
          { id: "l5", title: "Interacciones básicas", duration: "35 min" },
          { id: "l6", title: "Esperas y Assertions", duration: "45 min" },
        ],
      },
      {
        id: "s3",
        title: "Patrones Avanzados",
        lessons: [
          { id: "l7", title: "Page Object Model", duration: "50 min" },
          { id: "l8", title: "Fixtures y Hooks", duration: "40 min" },
          { id: "l9", title: "CI/CD con GitHub Actions", duration: "45 min" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Ciberseguridad para Developers",
    slug: "ciberseguridad-developers",
    description:
      "Protege tus aplicaciones con OWASP Top 10, pentesting básico y buenas prácticas.",
    longDescription:
      "Curso práctico de ciberseguridad orientado a desarrolladores. Aprende a identificar y mitigar vulnerabilidades en tus aplicaciones web.",
    category: "security",
    level: "intermediate",
    duration: "20 horas",
    lessons: 40,
    students: 987,
    rating: 4.7,
    instructor: {
      id: "i2",
      name: "Carlos Méndez",
      avatar: "/avatars/carlos.jpg",
      role: "Cybersecurity Engineer",
      bio: "Especialista en seguridad ofensiva y defensiva con +8 años de experiencia.",
    },
    thumbnail: "/courses/security.jpg",
    tags: ["OWASP", "Pentesting", "Seguridad", "Ethical Hacking"],
    price: 69.99,
    discountPrice: 44.99,
    curriculum: [
      {
        id: "s1",
        title: "Fundamentos de Seguridad",
        lessons: [
          { id: "l1", title: "Principios de Seguridad Informática", duration: "30 min", isFree: true },
          { id: "l2", title: "OWASP Top 10", duration: "45 min" },
          { id: "l3", title: "Threat Modeling", duration: "40 min" },
        ],
      },
      {
        id: "s2",
        title: "Vulnerabilidades Web",
        lessons: [
          { id: "l4", title: "XSS y CSRF", duration: "50 min", isFree: true },
          { id: "l5", title: "SQL Injection", duration: "45 min" },
          { id: "l6", title: "Authentication Flaws", duration: "40 min" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Backend con Node.js y TypeScript",
    slug: "backend-node-typescript",
    description:
      "Construye APIs robustas y escalables con Node.js, Express, TypeScript y bases de datos.",
    longDescription:
      "Aprende a diseñar y construir APIs RESTful profesionales con Node.js, TypeScript, Express, Prisma ORM y PostgreSQL.",
    category: "backend",
    level: "intermediate",
    duration: "28 horas",
    lessons: 52,
    students: 2134,
    rating: 4.8,
    instructor: {
      id: "i3",
      name: "Ana Martínez",
      avatar: "/avatars/ana.jpg",
      role: "Backend Architect",
      bio: "Backend developer con expertise en Node.js, Python y arquitectura de microservicios.",
    },
    thumbnail: "/courses/backend.jpg",
    tags: ["Node.js", "TypeScript", "Express", "PostgreSQL", "APIs"],
    price: 54.99,
    discountPrice: 34.99,
    curriculum: [
      {
        id: "s1",
        title: "Node.js Fundamentals",
        lessons: [
          { id: "l1", title: "Event Loop y Async", duration: "35 min", isFree: true },
          { id: "l2", title: "Módulos y NPM", duration: "30 min" },
          { id: "l3", title: "File System y Streams", duration: "40 min" },
        ],
      },
      {
        id: "s2",
        title: "APIs REST con Express",
        lessons: [
          { id: "l4", title: "Rutas y Middleware", duration: "45 min", isFree: true },
          { id: "l5", title: "Validación con Zod", duration: "35 min" },
          { id: "l6", title: "Autenticación JWT", duration: "50 min" },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "DevOps y Cloud Essentials",
    slug: "devops-cloud-essentials",
    description:
      "Docker, Kubernetes, CI/CD, y despliegue en cloud para developers modernos.",
    longDescription:
      "Curso completo de DevOps que cubre desde contenedores hasta orquestación y pipelines de CI/CD en la nube.",
    category: "devops",
    level: "advanced",
    duration: "32 horas",
    lessons: 60,
    students: 756,
    rating: 4.6,
    instructor: {
      id: "i4",
      name: "Roberto Gómez",
      avatar: "/avatars/roberto.jpg",
      role: "DevOps Engineer",
      bio: "DevOps engineer con experiencia en AWS, GCP, Kubernetes y Terraform.",
    },
    thumbnail: "/courses/devops.jpg",
    tags: ["Docker", "Kubernetes", "CI/CD", "AWS", "Cloud"],
    price: 79.99,
    discountPrice: 49.99,
    curriculum: [
      {
        id: "s1",
        title: "Contenedores",
        lessons: [
          { id: "l1", title: "Docker Fundamentals", duration: "40 min", isFree: true },
          { id: "l2", title: "Docker Compose", duration: "45 min" },
          { id: "l3", title: "Imágenes Multi-stage", duration: "35 min" },
        ],
      },
      {
        id: "s2",
        title: "Orquestación",
        lessons: [
          { id: "l4", title: "Kubernetes Basics", duration: "50 min" },
          { id: "l5", title: "Pods y Deployments", duration: "45 min" },
          { id: "l6", title: "Services e Ingress", duration: "40 min" },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Python para Data Science",
    slug: "python-data-science",
    description:
      "Análisis de datos, visualización y machine learning con Python y sus librerías.",
    longDescription:
      "Domina Python para data science: Pandas, NumPy, Matplotlib, Seaborn y fundamentos de ML con Scikit-learn.",
    category: "data",
    level: "beginner",
    duration: "22 horas",
    lessons: 44,
    students: 1890,
    rating: 4.7,
    instructor: {
      id: "i5",
      name: "Laura Castro",
      avatar: "/avatars/laura.jpg",
      role: "Data Scientist",
      bio: "Data scientist con experiencia en análisis predictivo y visualización de datos.",
    },
    thumbnail: "/courses/python-data.jpg",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "ML"],
    price: 44.99,
    discountPrice: 24.99,
    curriculum: [
      {
        id: "s1",
        title: "Python Esencial",
        lessons: [
          { id: "l1", title: "Tipos de Datos y Estructuras", duration: "30 min", isFree: true },
          { id: "l2", title: "Funciones y Módulos", duration: "35 min" },
          { id: "l3", title: "NumPy Fundamentals", duration: "40 min" },
        ],
      },
      {
        id: "s2",
        title: "Análisis de Datos",
        lessons: [
          { id: "l4", title: "Pandas: DataFrames", duration: "45 min", isFree: true },
          { id: "l5", title: "Visualización con Matplotlib", duration: "40 min" },
          { id: "l6", title: "Introducción a ML", duration: "50 min" },
        ],
      },
    ],
  },
]

export const featuredCourses = courses.slice(0, 3)
export const popularCourses = courses.slice(0, 4)
export const newCourses = courses.slice(3)
