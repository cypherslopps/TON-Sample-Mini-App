import { Suspense } from "react";
import { Route, Routes } from "react-router-dom"
import { Portal, Exchange, Earn, Referrals, Airdrop, Mining } from "./pages"
import { useTonWallet } from "./provider/TonWalletProvider";
import { Loader, Navigation, WalletConnect } from "./components";
import Avatar from "./assets/images/avatar.jpg";

function App() {
  const { isConnected } = useTonWallet();

  return (
    <main className="py-2.5">
      {isConnected ? (
        <main>
          <header className="pb-4 pt-1 px-2 flex items-center justify-between">
            {/* Profile */}
            <div className="flex items-center gap-x-2">
              <figure className="w-10 h-10 border border-purple-500/50 rounded-full overflow-hidden">
                <img 
                  src={Avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </figure>
              
              <span className="text-[.84rem] font-medium">Random User</span>
            </div>

            <WalletConnect className="w-max px-2 py-1 bg-white/10 backdrop-blur-md text-[.78rem]" />
          </header>

          <section className="rounded-tr-3xl rounded-tl-3xl border-t-2 border-gold pt-3.5 px-2">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/earn" element={<Earn />} />
                <Route path="/referrals" element={<Referrals />} />
                <Route path="/airdrop" element={<Airdrop />} />
                <Route path="/mine" element={<Mining />} />
              </Routes>
            </Suspense>
          </section>

          <Navigation />
        </main>
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Portal />} />
          </Routes>
        </Suspense>
      )}
    </main>
  )
}

export default App
