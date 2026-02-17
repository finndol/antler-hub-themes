import { TopBar } from "@/components/layout/TopBar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Paperclip,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Video,
} from "lucide-react"

const meetings = [
  {
    time: "10:00 AM – 10:30 AM",
    title: "Founder Check-in: Sarah Chen",
    attendees: ["SC", "FD", "AK"],
    hasJoin: true,
  },
  {
    time: "11:00 AM – 11:45 AM",
    title: "Cohort SP25 Pipeline Review",
    attendees: ["FD", "JM", "RL", "TS"],
    hasJoin: true,
  },
  {
    time: "2:00 PM – 2:30 PM",
    title: "Portfolio Sync: NovaTech",
    attendees: ["FD", "DW"],
    hasJoin: false,
  },
]


export function HomePage() {
  return (
    <div className="flex flex-col">
      <TopBar title="Home" />

      <div className="mx-auto w-full max-w-3xl px-8 py-10">
        {/* Greeting */}
        <h2 className="text-2xl font-semibold tracking-tight">Good morning, Finn.</h2>

        {/* Ask Anything */}
        <div className="mt-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-3">
                    <input
                      type="text"
                      placeholder="Ask anything..."
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    />
                    <Badge variant="secondary" className="text-[10px]">
                      Auto
                    </Badge>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Paperclip className="h-4 w-4" />
                    </button>
                    <Button size="sm" className="h-7 w-7 p-0">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Meetings */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold">Meetings</h3>
              <span className="text-sm text-muted-foreground">Today, Feb 17</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="rounded-md p-1 hover:bg-accent">
                <ChevronLeft className="h-4 w-4 text-muted-foreground" />
              </button>
              <button className="rounded-md p-1 hover:bg-accent">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {meetings.map((meeting, i) => (
              <Card key={i}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                      <Video className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{meeting.title}</p>
                      <p className="text-xs text-muted-foreground">{meeting.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {meeting.attendees.map((a, j) => (
                        <Avatar key={j} className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-[10px]">{a}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    {meeting.hasJoin && (
                      <Button variant="outline" size="sm" className="h-7 text-xs">
                        Join
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
