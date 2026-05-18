"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const languageLabels: Record<string, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  html: "HTML",
  css: "CSS",
  text: "Texto",
}

export function CodeBlock({
  code,
  language,
}: {
  code: string
  language: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative my-4 rounded-xl border border-white/10 bg-[#0a0d1a] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
          {languageLabels[language] || language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="font-mono text-[13px] leading-[1.6] whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
