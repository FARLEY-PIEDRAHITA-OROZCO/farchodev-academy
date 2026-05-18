import type { CommunityPost } from "@/types"

export const communityPosts: CommunityPost[] = [
  {
    id: "p1",
    author: {
      name: "María García",
      avatar: "/avatars/maria.jpg",
      role: "Estudiante",
    },
    content:
      "Acabo de terminar el curso de Desarrollo Web Moderno y ¡es increíble! Los proyectos prácticos me ayudaron a entender React de verdad. Muy recomendado para quienes empiezan desde cero.",
    likes: 24,
    comments: 8,
    timestamp: "Hace 3 horas",
    tags: ["desarrollo-web", "react", "testimonio"],
  },
  {
    id: "p2",
    author: {
      name: "Juan Pablo Rojas",
      avatar: "/avatars/juan.jpg",
      role: "QA Engineer",
    },
    content:
      "Alguien más ha implementado Page Object Model con Playwright? Me gustaría compartir mi approach y recibir feedback. Dejo el link de mi repo en los comentarios.",
    likes: 18,
    comments: 12,
    timestamp: "Hace 5 horas",
    tags: ["playwright", "qa", "pom"],
  },
  {
    id: "p3",
    author: {
      name: "Ana López",
      avatar: "/avatars/ana.jpg",
      role: "Estudiante",
    },
    content:
      "¿Recomiendan hacer el roadmap de Frontend o el de QA primero? Tengo conocimientos básicos de JavaScript y me interesan ambas áreas.",
    likes: 15,
    comments: 23,
    timestamp: "Hace 8 horas",
    tags: ["carrera", "frontend", "qa", "consejo"],
  },
  {
    id: "p4",
    author: {
      name: "Farley Piedrahita",
      avatar: "/avatars/farley.jpg",
      role: "Instructor",
    },
    content:
      "Nuevo video en el curso de Ciberseguridad: 'OWASP Top 10 explicado con ejemplos reales'. Ya disponible en la sección de Vulnerabilidades Web. ¡No se lo pierdan!",
    likes: 42,
    comments: 5,
    timestamp: "Hace 1 día",
    tags: ["ciberseguridad", "owasp", "nuevo-contenido"],
  },
  {
    id: "p5",
    author: {
      name: "Carlos Ruiz",
      avatar: "/avatars/carlos.jpg",
      role: "DevOps Engineer",
    },
    content:
      "Comparto mi template de CI/CD para proyectos Next.js con Playwright tests incluidos. Ideal para equipos que quieren integrar QA en su pipeline.",
    likes: 31,
    comments: 9,
    timestamp: "Hace 2 días",
    tags: ["devops", "cicd", "nextjs", "playwright"],
  },
]
