"use client"

import { motion } from "framer-motion"
import {
  User,
  Mail,
  Calendar,
  Flame,
  Clock,
  Award,
  BookOpen,
  Settings,
  Shield,
  Bell,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { currentUser } from "@/data/users"
import { studentStats } from "@/data"

export default function ProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8">Mi Perfil</h1>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-1">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-blue-500 text-2xl text-white">
                {currentUser.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">{currentUser.name}</h2>
            <p className="text-sm text-muted-foreground">{currentUser.email}</p>
            <Badge variant="secondary" className="mt-3">
              {currentUser.role === "student" ? "Estudiante" : "Admin"}
            </Badge>

            <div className="w-full mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Miembro desde</span>
                <span>{currentUser.joinedAt}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Cursos completados</span>
                <span>{currentUser.completedCourses}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Certificaciones</span>
                <span>{currentUser.certifications}</span>
              </div>
            </div>

            <Button className="w-full mt-6">Editar perfil</Button>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="stats">
            <TabsList>
              <TabsTrigger value="stats">Estadísticas</TabsTrigger>
              <TabsTrigger value="settings">Configuración</TabsTrigger>
              <TabsTrigger value="security">Seguridad</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Racha actual", value: `${studentStats.streak} días`, icon: Flame },
                  { label: "Horas de estudio", value: `${studentStats.totalHours}h`, icon: Clock },
                  { label: "Logros", value: studentStats.achievements, icon: Award },
                  { label: "Cursos inscritos", value: studentStats.enrolledCourses, icon: BookOpen },
                ].map((stat) => (
                  <Card key={stat.label}>
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                        <stat.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
                    Progreso general
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Frente al objetivo de racha</span>
                      <span>{Math.round((studentStats.streak / studentStats.streakGoal) * 100)}%</span>
                    </div>
                    <Progress value={(studentStats.streak / studentStats.streakGoal) * 100} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Horas este mes</span>
                      <span>{studentStats.totalHours}h / 100h</span>
                    </div>
                    <Progress value={Math.min((studentStats.totalHours / 100) * 100, 100)} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
                    Información personal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" defaultValue={currentUser.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" defaultValue={currentUser.email} />
                    </div>
                  </div>
                  <Button>Guardar cambios</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
                    Preferencias
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Notificaciones por email", desc: "Recibe actualizaciones de cursos" },
                    { label: "Recordatorios de estudio", desc: "Recordatorios diarios para mantener tu racha" },
                    { label: "Perfil público", desc: "Permite que otros vean tu progreso" },
                  ].map((pref) => (
                    <div
                      key={pref.label}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02]"
                    >
                      <div>
                        <p className="text-sm font-medium">{pref.label}</p>
                        <p className="text-xs text-muted-foreground">{pref.desc}</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
                    Contraseña
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current">Contraseña actual</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new">Nueva contraseña</Label>
                      <Input id="new" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm">Confirmar contraseña</Label>
                      <Input id="confirm" type="password" />
                    </div>
                  </div>
                  <Button>Actualizar contraseña</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  )
}
