import { useTonWallet } from '../provider/TonWalletProvider';

const WalletConnect = () => {
  const { connect, address, disconnect, isConnected } = useTonWallet();

  return (
    <>
      {isConnected ? (
        <button
          onClick={disconnect}
          className='bg-purple-500 text-white text-[.82rem] w-full rounded-lg py-1.5 active:scale-[.98] transition-all duration-300'
        >
          {address}
        </button>
      ) : (
        <button
          className='bg-purple-500 text-white text-[.82rem] w-full rounded-lg py-1.5 active:scale-[.98] transition-all duration-300'
          onClick={connect}
        >
          Connect wallet
        </button>
      )}
    </>
  )
}

export default WalletConnect