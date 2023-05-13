import { useUserContext } from "context/UserContext";
import useConnect from "hooks/useConnect";
import { useEffect, useRef, useState } from "react";
import injectedModule from "@web3-onboard/injected-wallets";
import { init, useConnectWallet, useSetChain } from "@web3-onboard/react";

interface Blockchain {
    name: string;
    img: string;
    chainId: string;
}

const injected = injectedModule();

init({
    wallets: [injected],
    chains: [
        {
            id: "0x13881",
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
            rpcUrl: "https://rpc.chiadochain.net",
        },
        {
            id: "0xE704",
            token: "ETH",
            label: "Linea Testnet",
            rpcUrl: "https://rpc.testnet.linea.exchange",
        },
        {
            id: "0xAA36A7",
            token: "ETH",
            label: "Sepolia",
            rpcUrl: "https://rpc.sepolia.io",
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

const blockchainList = [
    { name: "Arbitrum (Goerli)", img: "/img/logos/networks/arbitrum-logo.png", chainId: "0x66eed" },
    { name: "Optimism (Goerli)", img: "/img/logos/networks/optimism-logo.png", chainId: "0x1a4" },
    { name: "zkEVM (Goerli)", img: "/img/logos/networks/zkevm-logo.png", chainId: "0x5a2" },
    { name: "Polygon (Mumbai)", img: "/img/logos/networks/polygon-logo.png", chainId: "0x13881" },
    { name: "Gnosis (Testnet)", img: "/img/logos/networks/gnosis-logo.png", chainId: "0x27D8" },
    { name: "Linea (Testnet)", img: "/img/logos/networks/linea-logo.png", chainId: "0xE704" },
    { name: "Sepolia", img: "/img/logos/networks/ethereum-logo.png", chainId: "0xAA36A7" },
];

const ScrollDownMenu: React.FC = () => {
    const [{ wallet }] = useConnectWallet();
    const [{ connectedChain }, setChain] = useSetChain();
    const { handleConnect } = useConnect();

    const previousChainId = useRef<string>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedBlockchain, setSelectedBlockchain] = useState<Blockchain>();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (blockchain: Blockchain) => {
        if (!wallet) {
            handleConnect();
        }
        if (wallet) {
            setChain({ chainId: blockchain.chainId });
            setSelectedBlockchain(blockchain);
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (!previousChainId.current && connectedChain?.id) {
            previousChainId.current = connectedChain.id;
        }
        if (previousChainId?.current !== connectedChain?.id && wallet) {
            window.location.reload();
        }
    }, [connectedChain?.id]);

    return (
        <div className="relative w-48">
            <button
                type="button"
                onClick={handleToggle}
                className="flex w-[300px] items-center gap-3 rounded-md border border-gray-300 px-8 py-4 text-center text-lg font-medium focus:outline-none"
            >
                {selectedBlockchain && <img src={selectedBlockchain.img} alt={selectedBlockchain.name} className="h-8 w-8" />}
                <div className="text-center">{selectedBlockchain ? selectedBlockchain.name : "Select a Network"}</div>
            </button>

            {isOpen && (
                <ul className="absolute mt-2 w-[300px] w-full rounded-md border border-gray-300 bg-white py-2 shadow-lg">
                    {blockchainList.map((blockchain, i) => (
                        <li
                            key={i}
                            className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleSelect(blockchain)}
                        >
                            <img src={blockchain.img} alt={blockchain.name} className="h-8 w-8" />
                            <div>{blockchain.name}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ScrollDownMenu;
