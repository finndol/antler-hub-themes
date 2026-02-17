import { TopBar } from "@/components/layout/TopBar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import { Home } from "lucide-react"
import { DataTable } from "@/components/payments/data-table"
import { columns, type Payment } from "@/components/payments/columns"

const paymentData: Payment[] = [
  { id: "p001", name: "Ken Nguyen",        amount: 316,  status: "success",    email: "ken99@yahoo.com",       categories: ["Fintech", "B2B"] },
  { id: "p002", name: "Abe Fischer",       amount: 242,  status: "success",    email: "abe45@gmail.com",        categories: ["SaaS"] },
  { id: "p003", name: "Monserrat Diaz",    amount: 837,  status: "processing", email: "monserrat44@gmail.com",  categories: ["Climate", "Deep Tech"] },
  { id: "p004", name: "Silas Park",        amount: 874,  status: "success",    email: "silas22@gmail.com",      categories: ["Health"] },
  { id: "p005", name: "Carmella Torres",   amount: 721,  status: "failed",     email: "carmella@hotmail.com",   categories: ["Marketplace", "B2B"] },
  { id: "p006", name: "John Doe",          amount: 100,  status: "pending",    email: "john.doe@example.com",   categories: ["EdTech"] },
  { id: "p007", name: "Jane Smith",        amount: 550,  status: "success",    email: "jane.smith@company.com", categories: ["SaaS", "B2B"] },
  { id: "p008", name: "Bob Wilson",        amount: 199,  status: "processing", email: "bob.wilson@test.org",    categories: ["Deep Tech", "Health"] },
  { id: "p009", name: "Alice Chen",        amount: 1200, status: "success",    email: "alice@startup.io",       categories: ["Fintech"] },
  { id: "p010", name: "Charlie Osei",      amount: 75,   status: "failed",     email: "charlie@email.net",      categories: ["Climate"] },
  { id: "p011", name: "Diana Müller",      amount: 450,  status: "pending",    email: "diana@work.com",         categories: ["EdTech", "Marketplace"] },
  { id: "p012", name: "Evan Kowalski",     amount: 999,  status: "success",    email: "evan@place.co",          categories: ["SaaS", "Deep Tech"] },
]

const lineChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const lineChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const areaChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const areaChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function HomePage() {
  return (
    <div className="flex flex-col">
      <TopBar title="Home" icon={Home} />

      <div className="w-full px-8 py-5">
        {/* Greeting */}
        <h2 className="text-2xl font-semibold tracking-tight">Good morning, Finn.</h2>

        {/* Charts Row */}
        <div className="mt-5 grid grid-cols-5 gap-4">
          {/* Line Chart - Label */}
          <Card className="col-span-3 gap-0 py-0">
            <CardHeader className="p-5 pb-2">
              <CardTitle>Applications: Korea</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <ChartContainer config={lineChartConfig} className="h-[200px] w-full">
                <LineChart
                  accessibilityLayer
                  data={lineChartData}
                  margin={{ top: 20, left: 12, right: 12, bottom: 0 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-desktop)" }}
                    activeDot={{ r: 6 }}
                  >
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Line>
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Area Chart - Legend */}
          <Card className="col-span-2 gap-0 py-0">
            <CardHeader className="p-5 pb-2">
              <CardTitle>Portfolio growth</CardTitle>
              <CardDescription>
                Showing total visitors for the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <ChartContainer config={areaChartConfig} className="h-[200px] w-full">
                <AreaChart
                  accessibilityLayer
                  data={areaChartData}
                  margin={{ top: 12, left: 12, right: 12, bottom: 0 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    fill="var(--color-mobile)"
                    fillOpacity={0.4}
                    stroke="var(--color-mobile)"
                    stackId="a"
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Payments Table */}
        <div className="mt-10">
          <DataTable columns={columns} data={paymentData} />
        </div>
      </div>
    </div>
  )
}
