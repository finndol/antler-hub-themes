import { Link, useLocation } from "react-router"
import { AntlerLogo } from "@/components/AntlerLogo"
import {
  Home,
  Bell,
  CheckSquare,
  StickyNote,
  Mail,
  Phone,
  BarChart3,
  Layers,
  Palette,
  Info,
  SlidersHorizontal,
  Settings,
  MoreHorizontal,
  MessageCircle,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTheme, THEMES } from "@/contexts/ThemeContext"

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Bell, label: "Leads", path: "#" },
  { icon: CheckSquare, label: "Applicants", path: "#" },
  { icon: StickyNote, label: "Founders", path: "#" },
  { icon: Mail, label: "Deals", path: "#" },
  { icon: Phone, label: "Portfolio", path: "#" },
  { icon: BarChart3, label: "Reports", path: "#" },
]


export function Sidebar() {
  const location = useLocation()
  const { colorTheme, setColorTheme } = useTheme()

  return (
    <aside className="flex h-screen w-[264px] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      {/* Workspace */}
      <div className="flex h-12 items-center px-5 pt-2">
        <AntlerLogo className={`h-6 ${colorTheme === "antler-v1" ? "text-[var(--brand)]" : "text-sidebar-foreground"}`} />
      </div>

      {/* Quick Actions */}
      <div className="px-3 py-3">
        <button className="flex w-full items-center gap-2 rounded-md border border-sidebar-border px-2 py-1 text-[14px] leading-[20px] font-normal text-sidebar-foreground shadow-[0_1px_2px_rgb(0_0_0/0.06)] transition-colors duration-200 hover:bg-sidebar-accent">
          <MessageCircle className="h-3.5 w-3.5" />
          <span className="flex-1 text-left">Chat with AI</span>
          <kbd className="text-[11px] text-sidebar-foreground/50">⌘K</kbd>
        </button>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 overflow-y-auto px-3">
        <p className="mb-1 mt-2 px-2 text-[11px] font-medium tracking-widest text-sidebar-foreground/40">MENU</p>
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = item.path === "/" ? location.pathname === "/" : location.pathname === item.path
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-[14px] leading-[20px] font-normal transition-colors duration-200 ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            )
          })}
        </div>

        <Separator className="mt-4 bg-sidebar-border" />

        {/* Style Guide Nav Links */}
        <p className="mb-1 mt-4 px-2 text-[11px] font-medium tracking-widest text-sidebar-foreground/40">THEMES</p>
        <div className="space-y-0.5">
          <Link
            to="/style-guide"
            className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-[14px] leading-[20px] font-normal transition-colors duration-200 ${
              location.pathname === "/style-guide"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Default
          </Link>
          <Link
            to="/style-guide/antler-v1"
            className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-[14px] leading-[20px] font-normal transition-colors duration-200 ${
              location.pathname === "/style-guide/antler-v1"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Antler v1
          </Link>
        </div>

        {/* Theme Selector */}
        <p className="mb-1 mt-4 px-2 text-[11px] font-medium tracking-widest text-sidebar-foreground/40">THEME</p>
        <Select value={colorTheme} onValueChange={(v) => setColorTheme(v as "default" | "antler-v1")}>
          <SelectTrigger className="h-8 w-full text-[14px] bg-sidebar border-sidebar-foreground/20 text-sidebar-foreground">
            <span className="flex items-center gap-1.5">
              <Palette className="h-3.5 w-3.5" />
              <SelectValue />
            </span>
          </SelectTrigger>
          <SelectContent>
            {THEMES.map((t) => (
              <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

      </nav>

      {/* Bottom */}
      <div className="border-t border-sidebar-border px-3 py-2">
        <div className="space-y-0.5">
          <Link
            to="#"
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[14px] leading-[20px] font-normal text-sidebar-foreground transition-colors duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Info className="h-3.5 w-3.5" />
            Help Center
          </Link>
          <Link
            to="#"
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[14px] leading-[20px] font-normal text-sidebar-foreground transition-colors duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Integration
          </Link>
          <Link
            to="#"
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[14px] leading-[20px] font-normal text-sidebar-foreground transition-colors duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Settings className="h-3.5 w-3.5" />
            Setting
          </Link>
        </div>

        <div className="mt-2 flex items-center justify-between rounded-md border border-sidebar-border px-2 py-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sidebar-accent text-xs font-medium">
              FM
            </div>
            <span className="text-[13px] font-medium">Fallah Maulana</span>
          </div>
          <MoreHorizontal className="h-4 w-4 text-sidebar-foreground/50" />
        </div>
      </div>
    </aside>
  )
}
