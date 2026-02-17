import { Moon, Sun } from "lucide-react"
import { type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/ThemeContext"

export function TopBar({ title, icon: Icon }: { title: string; icon?: LucideIcon }) {
  const { mode, toggleMode } = useTheme()
  const dark = mode === "dark"

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background px-6 py-1.5">
      <h1 className="flex items-center gap-1.5 text-sm font-medium">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {title}
      </h1>
      <Button variant="outline" size="xs" onClick={toggleMode} className="gap-1.5 text-xs">
        {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        {dark ? "Dark" : "Light"}
      </Button>
    </header>
  )
}
