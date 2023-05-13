import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import { addressShortFormat, maticChainId, mumbaiChainId } from "../../lib";
import { useUserContext } from "../../context/UserContext";
import useConnect from "../../hooks/useConnect";

const injected = injectedModule();

init({
    wallets: [injected],
    chains: [
        {
            id: maticChainId,
            token: "MATIC",
            label: "Polygon Mainnet",
            rpcUrl: "https://polygon.llamarpc.com",
        },
        {
            id: mumbaiChainId,
            token: "MATIC",
            label: "Polygon Mumbai",
            rpcUrl: "https://rpc-mumbai.maticvigil.com",
        },
        {
            id: "0x66eed",
            token: "ETH",
            label: "Arbitrum Goerli",
            rpcUrl: "https://endpoints.omniatech.io/v1/arbitrum/goerli/public",
        },
        {
            id: "0x1a4",
            token: "ETH",
            label: "Optimism Goerli",
            rpcUrl: "https://endpoints.omniatech.io/v1/op/goerli/public",
        },
        {
            id: "0x5a2",
            token: "ETH",
            label: "zkEVM Goerli",
            rpcUrl: "https://rpc.public.zkevm-test.net",
        },
        {
            id: "0x27D8",
            token: "xDAI",
            label: "Gnosis Testnet",
            rpcUrl: "https://rpc.testnet.gnosis.io",
        },
        {
            id: "0xE704",
            token: "ETH",
            label: "Linea Testnet",
            rpcUrl: "https://rpc.testnet.linea.exchange",
        },
        {
            id: "0xa869",
            token: "AVAX",
            label: "Avalanche Fuji Testnet",
            rpcUrl: "https://endpoints.omniatech.io/v1/avax/fuji/public",
        },
    ],
    accountCenter: {
        desktop: {
            enabled: false,
            containerElement: "body",
        },
        mobile: {
            enabled: false,
            containerElement: "body",
        },
    },
});

const ConnectBtn = () => {
    const { handleConnect } = useConnect();
    const [{ address }] = useUserContext();

    return (
        <div onClick={handleConnect} className="mt-3 w-full cursor-pointer rounded-md bg-indigo-600 px-6 py-2 text-center text-white lg:ml-5 lg:mt-0">
            {address ? addressShortFormat(address) : "Connect"}
        </div>
    );
};

export default ConnectBtn;
