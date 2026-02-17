# Scaffold Prompt — Antler HUB Design Demo

Paste everything below into Claude via your IDE (e.g. Cursor, Windsurf, Claude Code):

---

## Project setup

Create a new **Vite + React + TypeScript** project called `antler-hub-demo`. Use the following stack:

- **Vite** with the React-TS template
- **Tailwind CSS v4** (latest, using the new CSS-based config)
- **shadcn/ui** (initialised with default style and default colors — do NOT customise the theme)
- **React Router v7** for page routing
- **Lucide React** for icons

Install all dependencies and make sure the project runs with `npm run dev`.

**Important: Use the default shadcn/ui theme exactly as it comes out of the box. Do not modify any colors, CSS variables, or theme tokens. We want the vanilla shadcn look as our "before" baseline.**

---

## Project structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx        # Main layout wrapper: sidebar + top bar + main content area
│   │   ├── Sidebar.tsx         # Left sidebar navigation
│   │   └── TopBar.tsx          # Minimal top bar (page title, breadcrumb, help link)
│   └── ui/                     # shadcn components will live here
├── pages/
│   ├── HomePage.tsx            # Dashboard home page
│   └── StyleGuidePage.tsx      # Design system / component showcase page
├── lib/
│   └── utils.ts                # cn() helper etc.
├── App.tsx                     # Router setup
└── main.tsx
```

---

## Page 1: Home Dashboard (`/`)

Replicate the layout and UX of the Attio CRM home page. This is an internal tool for a VC firm (Antler) — the users are investment professionals managing founders, cohorts, and portfolio companies. The home page should include:

### Layout
- **Left sidebar** (fixed, ~240px wide, dark background using shadcn's sidebar variables):
  - Workspace name "Antler" with a small icon at the top
  - "Quick actions" button with ⌘K shortcut hint
  - Search bar
  - Navigation links: Home, Notifications, Tasks, Notes, Emails, Calls, Reports, Automations
  - Collapsible "Favorites" section with "+ New folder"
  - Collapsible "Records" section with items: Founders, Companies, Cohorts, Deals (each with a small coloured dot icon)
  - Collapsible "Lists" section with "+ New list"
  - Collapsible "Chats" section with "+ New chat"
  - Bottom of sidebar: "Invite team members" link, and a subtle "Getting started 14%" progress indicator

- **Main content area** (using default shadcn background):
  - Top bar with page title "Home" and a Help link on the right
  - Greeting: "Good morning, Finn." (large text)
  - **Ask anything** — a large text input box styled like a chat/AI prompt with "Ask anything..." placeholder, an "Auto" label, attachment icon, and submit button
  - **Meetings** section — date header "Today, Feb 17" with left/right nav arrows. Show 2-3 placeholder meeting cards with time, title, attendees (avatar circles), and a "Join" button
  - **Tasks** section — header with count badge and "View all" link. Show 2-3 placeholder tasks with checkbox, title, assignee, and due date

### Important UX details
- All sections should feel spacious with generous padding and whitespace
- Use subtle borders to separate sections, not heavy dividers
- The sidebar nav items should have hover states and an active state
- Match the Attio layout structure closely — this is our reference for information architecture

---

## Page 2: Style Guide (`/style-guide`)

This page is a **component showcase** that documents what we're working with out of the box. It should be clean and well-organised. Include the following sections:

### Header
- Page title: "Antler HUB — Component Library"
- Subtitle: "Default shadcn/ui components — baseline before theming"
- A **theme toggle** (light/dark) using shadcn's built-in dark mode support

### Section 1: Color Palette (Current Defaults)
Display the current shadcn default CSS variable values as organised swatches in a grid. For each color, show:
- A swatch rectangle
- The token name (e.g. `--background`, `--primary`, `--muted`)
- The current HSL value

Organise into groups: Backgrounds, Text/Foreground, Primary, Secondary, Muted, Accent, Destructive, Border, Sidebar.

### Section 2: Typography
Show a type scale with:
- H1 / H2 / H3 / H4 / Body / Small / Muted text
- For each, show the rendered text and the Tailwind class used

### Section 3: Component Preview
Show a selection of shadcn components rendered with the default theme:
- Buttons (default, secondary, outline, ghost, destructive — all sizes)
- Inputs (text input, select/dropdown, textarea)
- Cards (a simple card with title, description, and action button)
- Badges (default, secondary, destructive, outline)
- A small data table (5 rows of sample founder data: name, company, cohort, status badge)
- Toggle / Switch
- Avatar group (a row of overlapping avatar circles)
- Separator
- Alert (default and destructive)

### Section 4: Sidebar Preview
Render a standalone mini-preview of the sidebar component so it's visible within the page context.

---

## Key instructions

1. **Do NOT customise the theme** — use shadcn's default colors, fonts, and spacing exactly as they come. This is our "before" state.
2. Use real shadcn/ui components — install at minimum: Button, Input, Card, Badge, Table, Avatar, Toggle, Separator, Alert, Textarea, Select
3. Use shadcn's `SidebarProvider` and `Sidebar` component if available, otherwise build a simple sidebar component using default shadcn variables (`--sidebar-background`, `--sidebar-foreground`, etc.)
4. The dark mode toggle should use React state and toggle a `dark` class on the `<html>` element
5. Add nav links in the sidebar to switch between Home (`/`) and Style Guide (`/style-guide`)
6. All content is placeholder/mock data — this is a layout and component demo, not connected to any backend
7. The project should look clean and functional out of the box when running `npm run dev`