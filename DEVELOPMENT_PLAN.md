# Plan de Desarrollo — Farchódev Academy

## Estado Actual (MVP — v0.1.0)

El proyecto es un **mockup visual funcional** de una plataforma educativa SaaS. Todas las páginas están renderizadas con datos mock, sin backend, autenticación real, pagos ni base de datos. El foco ha sido la **calidad visual, la experiencia de usuario y la arquitectura del frontend**.

### Lo que existe
- 13 rutas (páginas estáticas + dinámicas)
- Sistema de diseño completo (tokens CSS, tema dark/light, animaciones)
- 18 componentes UI primitivos (shadcn/ui)
- Componentes 3D (CodeNebula con Three.js)
- Sistema de layouts (marketing, dashboard, auth)
- Mock data para toda la plataforma (6 cursos, 12 lecciones, roadmaps, comunidad)
- Persistencia de progreso en localStorage
- Animaciones: transiciones de página, scroll reveals, contadores, tilt 3D, gráficos SVG

---

## Fase 1 — Contenido Real y UX (Corto Plazo)

### Prioridad Alta

| Tarea | Descripción | Impacto |
|---|---|---|
| **Contenido educativo real** | Expandir lecciones con contenido auténtico, ejemplos interactivos, quizzes | Alto |
| **Más cursos** | 10-15 cursos con niveles y categorías variadas | Alto |
| **Search functional** | Búsqueda con debounce, filtros combinados (categoría + nivel + precio) | Alto |
| **Responsive mobile** | Ajustar todas las páginas para mobile (especialmente dashboard y learn) | Alto |
| **Loading states** | Skeletons y placeholders para todas las páginas | Alto |

### Prioridad Media

| Tarea | Descripción |
|---|---|
| **Empty states** | Pantallas vacías con ilustraciones y CTA para cada sección |
| **Error states** | Páginas 404, 500 personalizadas con diseño de marca |
| **Paginación en cursos** | Carga bajo demanda o paginación en listado de cursos |
| **Animaciones optimizadas** | Respetar `prefers-reduced-motion` |
| **Scrollbar personalizado** | Consistente con el tema (ya existe base en globals.css) |

---

## Fase 2 — Interactividad y Gamificación (Mediano Plazo)

### Prioridad Alta

| Tarea | Descripción | Impacto |
|---|---|---|
| **Timer de estudio** | Cronómetro Pomodoro integrado en el dashboard | Medio |
| **Achievements / Logros** | Sistema de logros visuales con tarjetas y notificaciones | Alto |
| **Editor de código integrado** | Sandbox / editor de código embebido en las lecciones | Muy alto |
| **Progreso sincronizado** | Sincronización de progreso (backend opcional o localStorage multi-tab) | Alto |

### Prioridad Media

| Tarea | Descripción |
|---|---|
| **Tarjetas de aprendizaje (flashcards)** | Sistema de repaso espaciado |
| **Leaderboard** | Tabla de clasificación por puntos de la comunidad |
| **Modo oscuro por horario** | Cambio automático de tema según hora del día |
| **Compartir progreso** | Tarjetas de progreso para compartir en redes sociales |
| **Certificados dinámicos** | Generación de certificados con nombre de usuario y fecha real |

---

## Fase 3 — Arquitectura Real (Largo Plazo)

### Backend y Base de Datos

| Tarea | Descripción |
|---|---|
| **Autenticación real** | JWT, OAuth (Google/GitHub), sesiones |
| **Base de datos** | PostgreSQL / Supabase para usuarios, cursos, progreso |
| **API REST / GraphQL** | Endpoints para toda la funcionalidad |
| **Pagos** | Stripe / PayPal integration para cursos premium |
| **CMS** | Headless CMS (Sanity / Strapi) para contenido educativo |
| **CDN** | Imágenes, videos y assets optimizados |

### Infraestructura

| Tarea | Descripción |
|---|---|
| **CI/CD** | GitHub Actions + Vercel |
| **Testing** | Jest + React Testing Library + Playwright |
| **i18n** | Internacionalización (inglés/español) |
| **SEO** | Metadatos dinámicos, sitemap, Open Graph por curso |
| **Analytics** | Seguimiento de progreso, embudos de conversión |
| **PWA** | Service worker, offline support |

---

## Backlog de Ideas

### Visual / UX
- [ ] 3D interactivo en dashboard (modelo de progreso tipo "árbol que crece")
- [ ] Animación de confeti al completar un curso
- [ ] Partículas que siguen al mouse en el hero
- [ ] Modo "focus" en el reproductor de lecciones
- [ ] Efecto de typing en el hero de la landing

### Funcional
- [ ] Modo oscuro / claro con transición suave (no instantánea)
- [ ] Atajos de teclado en el reproductor de lecciones
- [ ] Notas del estudiante por lección (persistidas)
- [ ] Downloads de recursos (PDFs, código fuente)
- [ ] Mentorías / sesiones en vivo (agendamiento)
- [ ] Foro de discusión por lección
- [ ] Tests de conocimiento por módulo

### Técnico
- [ ] Migrar a App Router completo con server components donde sea posible
- [ ] Lazy loading de Three.js (solo cargar en páginas que lo usan)
- [ ] Bundle analysis y optimización de chunks
- [ ] Modo offline con Service Worker
- [ ] Storybook para el sistema de componentes

---

## Principios de Desarrollo

1. **Visual quality first** — Cada componente debe verse premium, sin atajos visuales.
2. **Sin deuda técnica en CSS** — Usar siempre tokens del design system, no valores hardcodeados.
3. **Comportamiento > Decoración** — Las animaciones deben comunicar estados y transiciones, no ser ruido visual.
4. **Mobile no es opcional** — Toda funcionalidad debe funcionar en mobile (aunque pueda tener menos adornos).
5. **Datos mock → Reales** — La estructura de datos debe reflejar cómo sería con un backend real para facilitar la migración.

---

## Commits Convencionales

```
feat:     Nueva funcionalidad
fix:      Corrección de bug
docs:     Documentación
style:    Cambios de formato (CSS, whitespace)
refactor: Refactorización sin cambios funcionales
perf:     Mejora de rendimiento
chore:    Mantenimiento (deps, config)
```

Ejemplo: `feat: add animated progress ring to dashboard stats`
