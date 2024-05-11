import PropTypes from "prop-types";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { TonWalletProvider } from "./TonWalletProvider" 

const Provider = ({ children }) => {
  return (
    <TonConnectUIProvider manifestUrl="https://sample-app.vercel.app/tonconnect-manifest.json">
        <TonWalletProvider>
            {children}
        </TonWalletProvider>
    </TonConnectUIProvider>
  )
}

Provider.propTypes = {
    children: PropTypes.node
}

export default Provider