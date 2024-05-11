import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTonConnectModal, useTonConnectUI, useTonAddress, CHAIN } from '@tonconnect/ui-react'; 


const TonWalletContext = createContext({
    connect: () => {},
    address: "",
    network: null,
    wallet: null,
    disconnect: () => {},
    isConnected: false
});

export const TonWalletProvider = ({ children }) => {
    const { open } = useTonConnectModal();
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    const userFriendlyAddress = useTonAddress();
    const [network, setNetwork] = useState(null);
    const isConnectedState = localStorage.getItem("isConnected") ? JSON.parse(localStorage.getItem("isConnected")) : false;
    const [isConnected, setIsConnected] = useState(isConnectedState);

    useEffect(() => {
        if (userFriendlyAddress) {
            setIsConnected(true);
            
            // Set network
            const activeNetwork = wallet?.account?.chain === CHAIN.MAINNET ? "mainnet" : "testnet";
            setNetwork(activeNetwork);

            localStorage.setItem("isConnected", true);
        } else {
            setIsConnected(false);
        }
    }, [userFriendlyAddress, wallet]);

    const disconnect = async () => {
        await tonConnectUI.disconnect();
    }

    return (
        <TonWalletContext.Provider value={{ 
            address: userFriendlyAddress,
            connect: open,
            network,
            wallet,
            disconnect,
            isConnected,
        }}>
            {children}
        </TonWalletContext.Provider>
    );
}

TonWalletProvider.propTypes = {
    children: PropTypes.node
}

export const useTonWallet = () => {
    const tonContext = useContext(TonWalletContext);

    if (!tonContext) {
        throw new Error("Error: Out of scope");
    }

    return tonContext;
};