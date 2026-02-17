import { useState, useEffect, useRef } from "react"
import { TopBar } from "@/components/layout/TopBar"
import { useTheme } from "@/contexts/ThemeContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Toggle } from "@/components/ui/toggle"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bold, Italic, AlertCircle, Terminal } from "lucide-react"

const colorGroups = [
  {
    title: "Backgrounds",
    colors: [
      { name: "--background", var: "var(--background)" },
      { name: "--card", var: "var(--card)" },
      { name: "--popover", var: "var(--popover)" },
    ],
  },
  {
    title: "Text / Foreground",
    colors: [
      { name: "--foreground", var: "var(--foreground)" },
      { name: "--card-foreground", var: "var(--card-foreground)" },
      { name: "--popover-foreground", var: "var(--popover-foreground)" },
    ],
  },
  {
    title: "Primary",
    colors: [
      { name: "--primary", var: "var(--primary)" },
      { name: "--primary-foreground", var: "var(--primary-foreground)" },
    ],
  },
  {
    title: "Secondary",
    colors: [
      { name: "--secondary", var: "var(--secondary)" },
      { name: "--secondary-foreground", var: "var(--secondary-foreground)" },
    ],
  },
  {
    title: "Muted",
    colors: [
      { name: "--muted", var: "var(--muted)" },
      { name: "--muted-foreground", var: "var(--muted-foreground)" },
    ],
  },
  {
    title: "Accent",
    colors: [
      { name: "--accent", var: "var(--accent)" },
      { name: "--accent-foreground", var: "var(--accent-foreground)" },
    ],
  },
  {
    title: "Destructive",
    colors: [{ name: "--destructive", var: "var(--destructive)" }],
  },
  {
    title: "Border",
    colors: [
      { name: "--border", var: "var(--border)" },
      { name: "--input", var: "var(--input)" },
      { name: "--ring", var: "var(--ring)" },
    ],
  },
  {
    title: "Sidebar",
    colors: [
      { name: "--sidebar", var: "var(--sidebar)" },
      { name: "--sidebar-foreground", var: "var(--sidebar-foreground)" },
      { name: "--sidebar-primary", var: "var(--sidebar-primary)" },
      { name: "--sidebar-accent", var: "var(--sidebar-accent)" },
      { name: "--sidebar-border", var: "var(--sidebar-border)" },
    ],
  },
]

const typographyItems = [
  { label: "H1", class: "text-4xl font-extrabold tracking-tight", text: "The quick brown fox" },
  { label: "H2", class: "text-3xl font-semibold tracking-tight", text: "The quick brown fox" },
  { label: "H3", class: "text-2xl font-semibold tracking-tight", text: "The quick brown fox" },
  { label: "H4", class: "text-xl font-semibold tracking-tight", text: "The quick brown fox" },
  { label: "Body", class: "text-base", text: "The quick brown fox jumps over the lazy dog." },
  { label: "Small", class: "text-sm", text: "The quick brown fox jumps over the lazy dog." },
  { label: "Muted", class: "text-sm text-muted-foreground", text: "The quick brown fox jumps over the lazy dog." },
]

const founderData = [
  { name: "Sarah Chen", company: "NovaTech", cohort: "SP25", status: "Active" },
  { name: "Marcus Johnson", company: "DataFlow", cohort: "FA24", status: "Active" },
  { name: "Priya Patel", company: "GreenGrid", cohort: "SP25", status: "Pipeline" },
  { name: "Alex Rivera", company: "CloudSync", cohort: "FA24", status: "Exited" },
  { name: "Emma Wilson", company: "HealthAI", cohort: "SP24", status: "Active" },
]

function ColorSwatch({ name, cssVar }: { name: string; cssVar: string }) {
  const [computedValue, setComputedValue] = useState("")

  useEffect(() => {
    const val = getComputedStyle(document.documentElement).getPropertyValue(name)
    setComputedValue(val.trim())
  })

  return (
    <div className="flex items-center gap-3 rounded-md border border-border p-3">
      <div
        className="h-10 w-10 rounded-md border border-border shrink-0"
        style={{ backgroundColor: cssVar }}
      />
      <div className="min-w-0">
        <p className="text-xs font-mono font-medium truncate">{name}</p>
        <p className="text-[10px] text-muted-foreground font-mono truncate">{computedValue || "..."}</p>
      </div>
    </div>
  )
}

function SidebarMiniPreview() {
  return (
    <div className="w-60 rounded-lg border border-border overflow-hidden">
      <div className="bg-sidebar text-sidebar-foreground p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-7 w-7 rounded-md bg-sidebar-primary text-sidebar-primary-foreground flex items-center justify-center text-xs font-bold">
            A
          </div>
          <span className="text-sm font-semibold">Antler</span>
        </div>
        <div className="space-y-1">
          {["Home", "Notifications", "Tasks", "Notes"].map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-2 py-1.5 text-sm ${
                i === 0
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground/70"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-sidebar-border">
          <p className="text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50 mb-2">
            Records
          </p>
          <div className="space-y-1">
            {[
              { label: "Founders", color: "bg-blue-500" },
              { label: "Companies", color: "bg-green-500" },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-2 px-2 py-1 text-sm text-sidebar-foreground/70">
                <span className={`h-2 w-2 rounded-full ${r.color}`} />
                {r.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function StyleGuidePage({ forceTheme }: { forceTheme?: string }) {
  const { colorTheme, setColorTheme } = useTheme()
  const prevThemeRef = useRef(colorTheme)

  useEffect(() => {
    if (!forceTheme) return
    prevThemeRef.current = colorTheme
    setColorTheme(forceTheme as "default" | "antler-v1")
    return () => setColorTheme(prevThemeRef.current)
  }, [forceTheme])

  const themeName = forceTheme === "antler-v1" ? "Antler v1" : "Default"

  return (
    <div className="flex flex-col">
      <TopBar title={`Style Guide — ${themeName}`} />

      <div className="mx-auto w-full max-w-5xl px-8 py-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Antler HUB — Component Library</h2>
            <p className="mt-1 text-muted-foreground">
              {themeName} theme — shadcn/ui components
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Section 1: Color Palette */}
        <section>
          <h3 className="text-xl font-semibold tracking-tight">Color Palette (Current Defaults)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            CSS variable values from the default shadcn/ui theme
          </p>

          <div className="mt-6 space-y-6">
            {colorGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">{group.title}</h4>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                  {group.colors.map((c) => (
                    <ColorSwatch key={c.name} name={c.name} cssVar={c.var} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Section 2: Typography */}
        <section>
          <h3 className="text-xl font-semibold tracking-tight">Typography</h3>
          <p className="mt-1 text-sm text-muted-foreground">Type scale with Tailwind classes</p>

          <div className="mt-6 space-y-4">
            {typographyItems.map((item) => (
              <div key={item.label} className="flex items-baseline gap-6 rounded-md border border-border p-4">
                <span className="w-16 shrink-0 text-xs font-mono text-muted-foreground">
                  {item.label}
                </span>
                <div className="min-w-0 flex-1">
                  <p className={item.class}>{item.text}</p>
                  <p className="mt-1 text-[10px] font-mono text-muted-foreground">{item.class}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Section 3: Component Preview */}
        <section>
          <h3 className="text-xl font-semibold tracking-tight">Component Preview</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            shadcn/ui components rendered with the default theme
          </p>

          {/* Buttons */}
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Buttons</h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Inputs */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Inputs</h4>
            <div className="grid max-w-md gap-4">
              <Input placeholder="Text input..." />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Type your message here..." />
            </div>
          </div>

          <Separator className="my-6" />

          {/* Cards */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Card</h4>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Founder Profile</CardTitle>
                <CardDescription>Review and manage founder information</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This card displays key information about a founder including their company,
                  cohort, and current status in the pipeline.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>
          </div>

          <Separator className="my-6" />

          {/* Badges */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Data Table */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Data Table</h4>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Cohort</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {founderData.map((founder) => (
                    <TableRow key={founder.name}>
                      <TableCell className="font-medium">{founder.name}</TableCell>
                      <TableCell>{founder.company}</TableCell>
                      <TableCell>{founder.cohort}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            founder.status === "Active"
                              ? "default"
                              : founder.status === "Pipeline"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {founder.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Toggle / Switch */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Toggle / Switch</h4>
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <Toggle aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="notifications" />
                <label htmlFor="notifications" className="text-sm">
                  Enable notifications
                </label>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Avatar Group */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Avatar Group</h4>
            <div className="flex -space-x-3">
              {["SC", "MJ", "PP", "AR", "EW"].map((initials) => (
                <Avatar key={initials} className="h-10 w-10 border-2 border-background">
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Separator */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Separator</h4>
            <div className="space-y-1">
              <p className="text-sm">Content above</p>
              <Separator />
              <p className="text-sm">Content below</p>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Alerts */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Alerts</h4>
            <div className="space-y-4 max-w-lg">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the CLI.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Section 4: Sidebar Preview */}
        <section>
          <h3 className="text-xl font-semibold tracking-tight">Sidebar Preview</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Standalone preview of the sidebar component
          </p>
          <div className="mt-6">
            <SidebarMiniPreview />
          </div>
        </section>

        <div className="h-16" />
      </div>
    </div>
  )
}
