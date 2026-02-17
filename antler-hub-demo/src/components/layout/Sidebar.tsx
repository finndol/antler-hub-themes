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
  Zap,
  Layers,
  Info,
  SlidersHorizontal,
  Settings,
  MoreHorizontal,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Bell, label: "Notifications", path: "#" },
  { icon: CheckSquare, label: "Tasks", path: "#" },
  { icon: StickyNote, label: "Notes", path: "#" },
  { icon: Mail, label: "Emails", path: "#" },
  { icon: Phone, label: "Calls", path: "#" },
  { icon: BarChart3, label: "Reports", path: "#" },
  { icon: Zap, label: "Automations", path: "#" },
]


export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="flex h-screen w-60 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      {/* Workspace */}
      <div className="flex h-11 items-center border-b border-sidebar-border px-5">
        <AntlerLogo className="h-5 text-sidebar-foreground" />
      </div>

      {/* Main Nav */}
      <nav className="mt-3 flex-1 overflow-y-auto px-3">
        <div>
          {navItems.map((item) => {
            const isActive = item.path === "/" ? location.pathname === "/" : location.pathname === item.path
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[14px] leading-[20px] font-normal transition-colors duration-200 ${
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

        <Separator className="my-2 bg-sidebar-border" />

        {/* Style Guide Nav Link */}
        <Link
          to="/style-guide"
          className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[14px] leading-[20px] font-normal transition-colors duration-200 ${
            location.pathname === "/style-guide"
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          Style Guide
        </Link>

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
