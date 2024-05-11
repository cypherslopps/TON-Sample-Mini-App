import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useTonWallet } from "./provider/TonWalletProvider";
import { Navigation, Portal } from "./components";

function App() {
  const { isConnected } = useTonWallet();

  return (
    <main className="py-2.5">
      {!isConnected ? (
        <main>
          <header className="py-6 px-2">Header</header>

          <section className="rounded-tr-3xl rounded-tl-3xl border-t-2 border-gold pt-3.5 px-2">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </section>

          <Navigation />
        </main>
      ) : (
        <Portal />
      )}
    </main>
  )
}

export default App
