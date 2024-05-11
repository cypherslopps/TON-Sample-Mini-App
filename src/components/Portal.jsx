import WalletConnect from './WalletConnect'
import SEO from './SEO'
import HamsterHead from "../assets/images/hamster-head.png";

const Portal = () => {
  return (
    <>
      <SEO 
          title="Hamster Portal"
          description="Connect wallet to access Dapp"
      />

      <section className="h-screen flex flex-col items-center justify-center gap-y-1">
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