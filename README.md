# Farchódev Academy

Plataforma educativa online de programación moderna. Diseñada como un SaaS profesional con identidad visual oscura, animaciones 3D y una experiencia de aprendizaje inmersiva.

Inspirado en el portafolio personal de Farley Piedrahita Orozco (farchodev), replicando su ADN visual: fondo `#05070E`, cyan `#22D3EE`, glassmorphism, glows, tipografía Inter + JetBrains Mono, y transiciones `cubic-bezier(0.22, 1, 0.36, 1)`.

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| Lenguaje | TypeScript strict |
| Estilos | TailwindCSS v4 + PostCSS |
| UI | Shadcn/ui + Radix Primitives |
| Animaciones | Framer Motion 12.39 |
| 3D | Three.js + React Three Fiber + Drei |
| Iconos | Lucide React |
| Utilidades | CVA, clsx, tailwind-merge |

---

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalación

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción + TypeScript check |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css              # Design tokens, tema, animaciones
│   ├── layout.tsx               # Layout raíz (fuentes, ThemeProvider, PageTransition)
│   ├── (marketing)/             # Rutas públicas (landing)
│   │   ├── layout.tsx           # Navbar + Footer
│   │   └── page.tsx             # Landing page (hero + stats + features)
│   ├── (dashboard)/             # Rutas protegidas (requieren layout con sidebar)
│   │   ├── layout.tsx           # Navbar + Sidebar
│   │   ├── dashboard/           # Dashboard del estudiante
│   │   ├── admin/               # Panel de administración
│   │   ├── courses/             # Listado y detalle de cursos
│   │   ├── learn/               # Reproductor de lecciones
│   │   ├── profile/             # Perfil de usuario
│   │   ├── roadmaps/            # Rutas de aprendizaje
│   │   ├── community/           # Comunidad / foro
│   │   └── certificates/        # Certificados
│   └── auth/                    # Autenticación
│       ├── layout.tsx           # Layout centrado
│       ├── login/
│       └── register/
├── components/
│   ├── ui/                      # Shadcn/ui primitives (18 componentes)
│   ├── atoms/                   # Componentes atómicos reutilizables
│   │   ├── code-nebula.tsx      # Fondo 3D con partículas (Three.js)
│   │   ├── animated-counter.tsx # Contador animado al hacer scroll
│   │   └── page-transition.tsx  # Transiciones entre rutas (AnimatePresence)
│   ├── molecules/               # Componentes moleculares
│   │   ├── card-tilt.tsx        # Efecto 3D tilt al hover
│   │   ├── code-block.tsx       # Bloque de código con copia
│   │   ├── lesson-renderer.tsx  # Renderizador de contenido educativo
│   │   └── progress-ring.tsx    # SVG donut animado
│   ├── organisms/               # Componentes organizacionales
│   │   ├── navbar.tsx           # Barra de navegación responsive
│   │   ├── sidebar.tsx          # Sidebar colapsable
│   │   └── footer.tsx           # Footer con enlaces
│   └── providers/               # Providers globales
│       └── theme-provider.tsx   # Context de tema (dark/light)
├── data/                        # Mock data (cursos, usuarios, stats, etc.)
├── hooks/                       # Custom hooks (use-toast)
├── lib/                         # Utilidades (fonts, cn utils)
└── types/                       # TypeScript interfaces y tipos
```

---

## Sistema de Diseño

### Tema
- **Dark mode first**: El tema oscuro es el predeterminado.
- **Día**: Se activa añadiendo la clase `.theme-day` al `<html>`, manejada por `ThemeProvider`. Los colores se invierten vía CSS custom properties.
- Persistencia en `localStorage` con la clave `theme`.

### Paleta
| Token | Dark | Light |
|---|---|---|
| `--background` | `#05070E` | `#F5F1E8` |
| `--foreground` | `#F8FAFC` | `#0F172A` |
| `--primary` (cyan) | `#22D3EE` | `#0891B2` |
| `--border` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` |

### Animaciones
| Clase | Propósito |
|---|---|
| `fade-in` | Aparición con opacidad |
| `fade-up` | Aparición con desplazamiento +28px |
| `glow-pulse` | Pulso de borde y sombra en tarjetas |
| `accordion-down/up` | Expansión de acordeones |

Todas las transiciones usan `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out personalizado).

### Tipografía
- **Inter** (`--font-sans`): Texto general, headings.
- **JetBrains Mono** (`--font-mono`): Código, datos técnicos.

---

## Funcionalidades Implementadas

### Landing Page
- Hero con **CodeNebula** (fondo 3D de partículas con paralaje)
- Badge + título con gradiente + subtítulo + CTA buttons
- Sección de estadísticas con **contadores animados** (scroll trigger)
- Sección de características con **efecto 3D tilt** en hover

### Cursos
- Listado con búsqueda, filtro por categorías (Tabs), tarjetas con tilt
- Detalle de curso: breadcrumbs, curriculum (acordeón), instructor card, pricing sidebar
- Lección: renderizado de contenido estructurado (texto, código, listas, tips), barra de progreso, navegación entre lecciones, progreso persistido en localStorage

### Dashboard
- Estadísticas animadas del estudiante
- Feed de actividad reciente con stagger reveal
- Racha de estudio con animación spring
- Cursos en progreso con barra de progreso
- Panel admin con gráfico de barras animado (gradiente), tasa de finalización animada

### Roadmaps
- Timeline con nodos de progreso
- Animaciones progresivas: reveal de nodos al hacer scroll, línea con scaleY, pulse en nodos activos/completados
- Barra de progreso con gradiente animado

### Comunidad
- Feed de posts con etiquetas
- Formulario de nuevo post
- Tags trending y estudiantes activos

### Perfil
- Avatar + estadísticas del usuario
- Tabs: estadísticas / configuración / seguridad
- Toggles de preferencias, cambio de contraseña

### Certificados
- Estado vacío con CTA
- Tarjetas de certificado con descarga y compartir

### Autenticación
- Login y Register con formularios centrados

---

## Decisiones Técnicas

1. **Mock data sin backend**: Toda la data está en `src/data/` como archivos TypeScript. No hay autenticación real ni pagos. Esto permite enfocar el desarrollo en la calidad visual y UX.

2. **Three.js con React Three Fiber**: Se eligió R3F sobre Three.js vanilla por su integración declarativa con React. La escena 3D (CodeNebula) usa 3 capas de partículas con paralaje para crear profundidad sin necesidad de cámara 3D compleja.

3. **Progreso en localStorage**: Las lecciones completadas se persisten en `localStorage` bajo la clave `academy_progress`, permitiendo que el progreso sobreviva a recargas sin backend.

4. **Atomic Design + Feature-based**: Los componentes siguen atomic design (átomos → moléculas → organismos) combinado con organización por funcionalidad (cada grupo de rutas en su propia carpeta).

5. **Page Transitions**: `PageTransition` envuelve el contenido en el layout raíz con `AnimatePresence mode="popLayout"`, activando fade/slide en cada cambio de ruta.

---

## Licencia

Proyecto privado — Farley Piedrahita Orozco.
