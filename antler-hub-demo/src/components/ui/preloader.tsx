"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PreloaderProps {
  isLoading: boolean
}

export function Preloader({ isLoading }: PreloaderProps) {
  const [mounted, setMounted] = React.useState(isLoading)
  const [visible, setVisible] = React.useState(isLoading)

  React.useEffect(() => {
    if (isLoading) {
      setMounted(true)
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [isLoading])

  if (!mounted) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out",
        visible ? "opacity-100" : "opacity-0"
      )}
      onTransitionEnd={() => {
        if (!visible) setMounted(false)
      }}
    >
      <div className="flex items-center gap-2">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="size-1.5 rounded-full bg-neutral-400 animate-dot-pulse"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
