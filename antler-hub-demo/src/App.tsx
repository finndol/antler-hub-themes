import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import { AppShell } from "@/components/layout/AppShell"
import { HomePage } from "@/pages/HomePage"
import { StyleGuidePage } from "@/pages/StyleGuidePage"
import { Preloader } from "@/components/ui/preloader"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader isLoading={isLoading} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/style-guide" element={<StyleGuidePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
