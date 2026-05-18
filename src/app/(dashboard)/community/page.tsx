"use client"

import { motion } from "framer-motion"
import { MessageCircle, Heart, Share2, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { communityPosts } from "@/data"

export default function CommunityPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Comunidad</h1>
          <p className="text-muted-foreground mt-1">
            Conecta con otros estudiantes y comparte tu progreso
          </p>
        </div>
        <Button>Nueva publicación</Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {communityPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Card className="hover:border-white/20 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10 shrink-0">
                      <AvatarFallback className="bg-cyan-400/10 text-cyan-400 text-sm">
                        {post.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium">{post.author.name}</span>
                        <Badge variant="secondary" className="text-[9px]">
                          {post.author.role}
                        </Badge>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {post.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.content}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-[10px] text-muted-foreground">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/5">
                        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-red-400 transition-colors">
                          <Heart className="h-3.5 w-3.5" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-cyan-400 transition-colors">
                          <MessageCircle className="h-3.5 w-3.5" />
                          {post.comments}
                        </button>
                        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto">
                          <Share2 className="h-3.5 w-3.5" />
                          Compartir
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold mb-3">Crear publicación</h3>
              <textarea
                className="w-full min-h-[100px] rounded-lg border border-input bg-transparent p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground"
                placeholder="Comparte algo con la comunidad..."
              />
              <Button size="sm" className="w-full mt-3">
                Publicar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold mb-3">Tendencias</h3>
              <div className="space-y-2">
                {["desarrollo-web", "qa-automation", "ciberseguridad", "react", "playwright"].map(
                  (tag) => (
                    <button
                      key={tag}
                      className="flex items-center gap-2 w-full p-2 rounded-lg text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                    >
                      <Tag className="h-3 w-3" />
                      #{tag}
                    </button>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold mb-3">Estudiantes activos</h3>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar key={i} className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-[10px] bg-cyan-400/10 text-cyan-400">
                      U{i}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] text-muted-foreground">
                  +24
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
