import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useTonWallet } from "./provider/TonWalletProvider";
import { Portal } from "./components";

function App() {
  const { isConnected } = useTonWallet();

  return (
    <main className="py-2.5 px-2">
      {isConnected ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Portal />
      )}
    </main>
  )
}

export default App
