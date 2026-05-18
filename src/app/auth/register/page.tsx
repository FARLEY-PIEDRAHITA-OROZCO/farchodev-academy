"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md px-4"
    >
      <div className="flex flex-col items-center mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-4">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Crea tu cuenta</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Empieza tu viaje en la programación
        </p>
      </div>

      <Card className="border-white/10">
        <CardHeader>
          <CardTitle>Registrarse</CardTitle>
          <CardDescription>
            Completa tus datos para crear una cuenta gratuita
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input id="firstName" placeholder="Farley" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input id="lastName" placeholder="Piedrahita" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="tu@correo.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
            <Input id="confirmPassword" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Crear cuenta gratis</Button>
          <p className="text-center text-xs text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-cyan-400 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
