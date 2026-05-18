import type { Metadata } from "next"
import "./globals.css"
import { inter, jetbrainsMono } from "@/lib/fonts"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { PageTransition } from "@/components/atoms/page-transition"

export const metadata: Metadata = {
  title: "Farchódev Academy — Aprende programación desde cero",
  description:
    "Academia online de programación moderna. Cursos de desarrollo web, QA, ciberseguridad y más.",
  keywords: [
    "programación",
    "cursos",
    "desarrollo web",
    "QA",
    "ciberseguridad",
    "academia online",
  ],
  authors: [{ name: "Farley Piedrahita Orozco" }],
  openGraph: {
    title: "Farchódev Academy",
    description:
      "Academia online de programación moderna. Aprende con cursos prácticos y roadmaps guiados.",
    type: "website",
    locale: "es_CO",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider><PageTransition>{children}</PageTransition></ThemeProvider>
      </body>
    </html>
  )
}
