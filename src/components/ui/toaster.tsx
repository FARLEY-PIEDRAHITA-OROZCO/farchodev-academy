"use client"

import { useToast, type ToasterToast } from "@/hooks/use-toast"
import {
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  Toast as ToastRoot,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }: ToasterToast) {
        return (
          <ToastRoot key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </ToastRoot>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
