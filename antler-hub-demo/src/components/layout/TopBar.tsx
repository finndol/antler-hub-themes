import { Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function TopBar({ title }: { title: string }) {
  const [dark, setDark] = useState(document.documentElement.classList.contains("dark"))

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <header className="sticky top-0 z-10 flex h-11 items-center justify-between border-b border-border bg-background px-6">
      <h1 className="text-sm font-medium">{title}</h1>
      <Button variant="outline" size="sm" onClick={toggleTheme} className="gap-2">
        {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        {dark ? "Dark" : "Light"}
      </Button>
    </header>
  )
}
