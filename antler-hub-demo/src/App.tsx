import { BrowserRouter, Routes, Route } from "react-router"
import { AppShell } from "@/components/layout/AppShell"
import { HomePage } from "@/pages/HomePage"
import { StyleGuidePage } from "@/pages/StyleGuidePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/style-guide" element={<StyleGuidePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
