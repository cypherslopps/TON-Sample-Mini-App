import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"


function App() {
  return (
    <main className="py-2.5 px-3.5">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
