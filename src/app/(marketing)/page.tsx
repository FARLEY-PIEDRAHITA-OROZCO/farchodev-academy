"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeNebula } from "@/components/atoms/code-nebula"
import { AnimatedCounter } from "@/components/atoms/animated-counter"
import { CardTilt } from "@/components/molecules/card-tilt"
import { useTheme } from "@/components/providers/theme-provider"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function LandingPage() {
  const { theme } = useTheme()

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <CodeNebula theme={theme} />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="default" className="mb-6">
              +10,000 estudiantes activos
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Aprende programación
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              como un profesional
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Cursos prácticos, roadmaps guiados y una comunidad activa para impulsar tu carrera
            en desarrollo web, QA, ciberseguridad y más.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/auth/register">
              <Button size="xl" className="w-full sm:w-auto shadow-[0_0_32px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_48px_hsl(var(--primary)/0.4)]">
                Empezar ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Ver cursos
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16"
          >
            <ChevronDown className="h-6 w-6 mx-auto text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: 10000, label: "Estudiantes", suffix: "+" },
              { value: 24, label: "Cursos", suffix: "+" },
              { value: 98, label: "Satisfacción", suffix: "%" },
              { value: 48, label: "Rating promedio", suffix: "", decimals: 1, divider: 10 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    duration={2}
                    decimals={stat.decimals ?? 0}
                    divider={stat.divider ?? 1}
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              ¿Por qué Farchódev Academy?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Una plataforma diseñada para llevarte de principiante a profesional.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Aprendizaje práctico",
                description: "Proyectos reales y ejercicios interactivos. Aprende haciendo, no solo viendo.",
              },
              {
                title: "Roadmaps guiados",
                description: "Rutas de aprendizaje estructuradas que te guían paso a paso hacia tu objetivo.",
              },
              {
                title: "Comunidad activa",
                description: "Comparte tu progreso, resuelve dudas y conecta con otros estudiantes.",
              },
            ].map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <CardTilt>
                  <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-cyan-400/30 transition-all duration-500">
                    <div className="relative z-10">
                      <div className="h-10 w-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
                        <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardTilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
