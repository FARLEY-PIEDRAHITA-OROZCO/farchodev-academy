"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, BookOpen, Monitor, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/providers/theme-provider"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/courses", label: "Cursos" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/community", label: "Comunidad" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
            <BookOpen className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Farchódev<span className="text-cyan-400">Academy</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <Link href="/auth/login" className="hidden sm:inline-flex">
            <Button variant="ghost" size="sm">
              Iniciar sesión
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button size="sm" className="hidden sm:inline-flex">
              Empezar gratis
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="secondary" size="sm" className="hidden lg:inline-flex">
              <Monitor className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm text-muted-foreground rounded-lg hover:bg-accent hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-white/5 my-2" />
          <Link
            href="/auth/login"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 text-sm text-muted-foreground rounded-lg hover:bg-accent hover:text-foreground"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/auth/register"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 text-sm font-medium text-cyan-400 rounded-lg hover:bg-cyan-400/10"
          >
            Empezar gratis
          </Link>
        </div>
      </div>
    </header>
  )
}
