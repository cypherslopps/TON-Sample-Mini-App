import { lazy, useEffect } from "react";
import { Navigation, WalletConnect } from "../../components";
import { Route, Routes, useNavigate } from "react-router-dom";
import Avatar from "../../assets/images/avatar.jpg";
import { useTonWallet } from "../../provider/TonWalletProvider";

const Exchange = lazy(() => import("./Exchange"));
const Referrals = lazy(() => import("./Referrals"));
const Mining = lazy(() => import("./Mining"));
const Airdrop = lazy(() => import("./Airdrop"));
const Earn = lazy(() => import("./Earn"));

const Intro = () => {
    const navigate = useNavigate();
    const { isConnected } = useTonWallet();

    useEffect(() => {
        if (!isConnected) {
            return navigate("/");
        }
    }, [isConnected, navigate])

    return (
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
                <Routes>
                    <Route path="/exchange" element={<Exchange />} />
                    <Route path="/earn" element={<Earn />} />
                    <Route path="/referrals" element={<Referrals />} />
                    <Route path="/airdrop" element={<Airdrop />} />
                    <Route path="/mine" element={<Mining />} />
                </Routes>
            </section>

            <Navigation />
        </main>
    )
}

export default Intro