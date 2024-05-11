import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"


function App() {
  return (
    <main className="py-2.5 px-2">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
