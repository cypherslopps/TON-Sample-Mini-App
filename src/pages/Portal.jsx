import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WalletConnect from '../components/WalletConnect'
import SEO from '../components/SEO'
import HamsterHead from "../assets/images/hamster-head.png";
import { useTonWallet } from "../provider/TonWalletProvider";

const Portal = () => {
  const navigate = useNavigate();
  const { isConnected } = useTonWallet();

  useEffect(() => {
      if (isConnected) {
          return navigate("/app/exchange");
      }
  }, [isConnected, navigate]);

  return (
    <>
      <SEO 
          title="Hamster Portal"
          description="Connect wallet to access Dapp"
      />

      <section className="h-screen flex flex-col items-center justify-center gap-y-1.5">
        <img 
          src={HamsterHead}
          alt="hamster portal"
        />
        <div className='flex flex-col items-center gap-y-1'>
          <p className='text-sm '>Connect wallet to access DAPP</p>
          <WalletConnect />
        </div>
      </section>
    </>
  )
}

export default Portal