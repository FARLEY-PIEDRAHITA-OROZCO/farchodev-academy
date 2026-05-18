<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Farchódev Academy — Project Guide

## Architecture

- **Atomic Design**: atoms/ → molecules/ → organisms/
- **Feature groups**: (marketing)/ (dashboard)/ auth/
- **Mock data only**: All data in src/data/, no backend
- **Theme**: dark mode first, .theme-day class for light mode

## Tech Stack

- Next.js 16.2.6 (App Router), TypeScript strict
- TailwindCSS v4 (uses @theme directive, NO tailwind.config.js)
- Framer Motion 12, Three.js + R3F + Drei
- Shadcn/ui with Radix primitives

## Key Conventions

- All pages are "use client" (mock data + animations)
- CSS transitions: `cubic-bezier(0.22, 1, 0.36, 1)`
- Framer Motion v12: use `mode="popLayout"` NOT deprecated `mode="wait"`
- Progress stored in localStorage under `academy_progress`
- Colors: cyan #22D3EE (dark), #0891B2 (light), bg #05070E (dark), #F5F1E8 (light/.theme-day)
- Fonts: Inter (sans), JetBrains Mono (mono) via next/font/google

## Component Patterns

- Use `useInView` from framer-motion for scroll triggers
- Use `AnimatedCounter` for count-up numbers
- Use `CardTilt` wrapper for 3D hover effect on cards
- Use `PageTransition` in root layout for route transitions
- Stagger children: define `containerVariants` and `itemVariants` locally

## Build

```bash
npm run build    # type-check + production build
npm run dev      # dev server
```
