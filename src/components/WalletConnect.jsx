import PropTypes from "prop-types";
import { useTonWallet } from '../provider/TonWalletProvider';
import { truncateAddress } from "../lib/utils";

const WalletConnect = ({ className }) => {
  const { connect, address, disconnect, isConnected } = useTonWallet();

  return (
    <>
      {isConnected ? (
        <button
          onClick={disconnect}
          className={`bg-purple-500 text-white text-[.82rem] w-full rounded-lg py-1.5 active:scale-[.98] transition-all duration-300 font-bold ${className}`}
        >
          {truncateAddress(address)}
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

WalletConnect.propTypes = {
  className: PropTypes.string
}

export default WalletConnect