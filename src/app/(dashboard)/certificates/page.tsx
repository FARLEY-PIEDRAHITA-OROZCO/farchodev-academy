"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { certificates } from "@/data"

export default function CertificatesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Certificados</h1>
        <p className="text-muted-foreground mt-1">
          Tus logros y certificaciones obtenidas en la plataforma
        </p>
      </div>

      {certificates.length === 0 ? (
        <Card>
          <CardContent className="p-12 flex flex-col items-center text-center">
            <Award className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Aún no tienes certificados</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Completa cursos para obtener certificados que respalden tus conocimientos.
            </p>
            <Button>Explorar cursos</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="group hover:border-cyan-400/30 transition-all duration-300 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-cyan-400/5 flex items-center justify-center relative overflow-hidden">
                  <Award className="h-16 w-16 text-cyan-400/30 group-hover:text-cyan-400/50 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <Badge className="absolute bottom-3 left-3 text-[10px]" variant="default">
                    Verificado
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {cert.courseName}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Calendar className="h-3 w-3" />
                    <span>Emitido el {new Date(cert.issuedAt).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-3 w-3" />
                      Descargar
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
