import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

type ColorTheme = "default" | "antler-v1"
type Mode = "light" | "dark"

interface ThemeContextValue {
  colorTheme: ColorTheme
  mode: Mode
  setColorTheme: (theme: ColorTheme) => void
  setMode: (mode: Mode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const THEMES: { value: ColorTheme; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "antler-v1", label: "Antler v1" },
]

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    return (localStorage.getItem("color-theme") as ColorTheme) || "default"
  })
  const [mode, setMode] = useState<Mode>(() => {
    return document.documentElement.classList.contains("dark") ? "dark" : "light"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorTheme)
    localStorage.setItem("color-theme", colorTheme)
  }, [colorTheme])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark")
    localStorage.setItem("mode", mode)
  }, [mode])

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"))
  }, [])

  return (
    <ThemeContext.Provider value={{ colorTheme, mode, setColorTheme, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
