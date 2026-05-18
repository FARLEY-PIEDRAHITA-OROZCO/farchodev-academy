"use client"

import { Lightbulb } from "lucide-react"
import type { LessonContent } from "@/types"
import { CodeBlock } from "@/components/molecules/code-block"

function HeadingBlock({ level, text }: { level: number; text: string }) {
  const styles: Record<number, string> = {
    2: "text-xl font-semibold mt-8 mb-4",
    3: "text-lg font-medium mt-6 mb-3 text-foreground/90",
  }
  const Tag = level === 2 ? "h2" : "h3"
  return <Tag className={styles[level]}>{text}</Tag>
}

function TextBlock({ body }: { body: string }) {
  return (
    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
      {body}
    </p>
  )
}

function ListBlock({
  items,
  ordered,
}: {
  items: string[]
  ordered?: boolean
}) {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag className="space-y-2 my-4 ml-6">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-[15px] leading-relaxed text-muted-foreground list-disc marker:text-cyan-400/60"
        >
          <span className="[&>code]:text-[13px] [&>code]:font-mono [&>code]:text-cyan-400 [&>code]:bg-cyan-400/10 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded">
            {item}
          </span>
        </li>
      ))}
    </Tag>
  )
}

function TipBlock({ body }: { body: string }) {
  return (
    <div className="my-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 mt-0.5">
          <Lightbulb className="h-3.5 w-3.5 text-cyan-400" />
        </div>
        <div className="text-sm leading-relaxed text-muted-foreground [&>strong]:text-cyan-400">
          {body}
        </div>
      </div>
    </div>
  )
}

export function LessonRenderer({ content }: { content: LessonContent[] }) {
  return (
    <div className="space-y-1">
      {content.map((block, i) => {
        switch (block.type) {
          case "heading":
            return <HeadingBlock key={i} level={block.level} text={block.text} />
          case "text":
            return <TextBlock key={i} body={block.body} />
          case "code":
            return <CodeBlock key={i} code={block.code} language={block.language} />
          case "list":
            return <ListBlock key={i} items={block.items} ordered={block.ordered} />
          case "tip":
            return <TipBlock key={i} body={block.body} />
          default:
            return null
        }
      })}
    </div>
  )
}
