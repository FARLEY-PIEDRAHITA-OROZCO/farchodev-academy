import Link from "next/link"
import { BookOpen, Globe, Heart, ExternalLink } from "lucide-react"

const footerLinks = {
  Producto: [
    { href: "/courses", label: "Cursos" },
    { href: "/roadmaps", label: "Roadmaps" },
  ],
  Proyectos: [
    { href: "https://farchodev-blog.vercel.app", label: "Farchódev Blog" },
    { href: "https://farchodev.vercel.app", label: "Farchódev Portfolio" },
  ],
  Legal: [
    { href: "/terms", label: "Términos" },
    { href: "/privacy", label: "Privacidad" },
  ],
}

const socialLinks = [
  { href: "https://github.com/farchodev", icon: Globe, label: "GitHub" },
  { href: "https://twitter.com/farchodev", icon: Globe, label: "Twitter" },
  { href: "https://linkedin.com/in/farchodev", icon: Globe, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Farchódev<span className="text-cyan-400">Academy</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Academia online de programación moderna. Aprende desarrollo web, QA, ciberseguridad y más con cursos prácticos.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Farchódev Academy. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-3 w-3 text-red-400" /> por Farley Piedrahita
          </p>
        </div>
      </div>
    </footer>
  )
}
