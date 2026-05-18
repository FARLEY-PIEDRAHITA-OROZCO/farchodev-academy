"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  PlayCircle,
  User,
  Shield,
  Map,
  MessageCircle,
  Award,
  LogOut,
  ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/courses", label: "Mis Cursos", icon: BookOpen },
  { href: "/learn/1/1", label: "Reproductor", icon: PlayCircle },
  { href: "/roadmaps", label: "Roadmaps", icon: Map },
  { href: "/community", label: "Comunidad", icon: MessageCircle },
  { href: "/certificates", label: "Certificados", icon: Award },
  { href: "/profile", label: "Perfil", icon: User },
  { href: "/admin", label: "Admin", icon: Shield },
]

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] border-r border-white/5 bg-background/50 backdrop-blur-xl transition-all duration-300 hidden lg:flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between px-4 py-4">
        {!collapsed && (
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Navegación
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
        >
          <ChevronLeft
            className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")}
          />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary shadow-[0_0_12px_hsl(var(--primary)/0.1)]"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <link.icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-white/5 p-3">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "w-full justify-start text-muted-foreground hover:text-destructive",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Cerrar sesión</span>}
        </Button>
      </div>
    </aside>
  )
}
