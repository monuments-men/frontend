import { useConnectWallet, useWallets } from "@web3-onboard/react";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { ethers } from "ethers";
import { useContractContext } from "../context/ContractContext";
import {
    arbitrumNFTAddress,
    gnosisNFTAddress,
    multiChainVerifier,
    multiPassArbitrum,
    multiPassGnosis,
    multiPassMumbai,
    multiPassOptimism,
    multiPassSepolia,
    mumbaiNFTAddress,
    optimismNFTAddress,
} from "lib/contracts";
import NFTabi from "lib/contracts/abi/ABI.json";
import multiChainVerifierAbi from "lib/contracts/abi/MultichainVerifier.json";
import multipassABI from "lib/contracts/abi/multipassABI.json";

const useConnect = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
    const wallets = useWallets();
    const [{ provider, signer }, userDispatch] = useUserContext();
    const [_, dispatch] = useContractContext();

    useEffect(() => {
        if (wallet) {
            const { provider } = wallet;
            userDispatch({
                type: "UPDATE_ADDRESS",
                address: wallet.accounts[0].address,
            });
            userDispatch({
                type: "UPDATE_PROVIDER",
                provider: new ethers.providers.Web3Provider(provider),
            });
        }
    }, [wallet]);

    useEffect(() => {
        if (provider) {
            userDispatch({
                type: "UPDATE_SIGNER",
                signer: provider.getSigner(),
            });
        }
    }, [provider]);

    const handleConnect = () => {
        if (!wallet && typeof window !== "undefined") {
            connect();
        } else if (!connecting && wallet) {
            disconnect({ label: wallet.label });

            userDispatch({
                type: "UPDATE_ADDRESS",
                address: "",
            });
        }
    };

    useEffect(() => {
        if (provider || signer) {
            dispatch({
                type: "UPDATE_MUMBAI_NFT_CONTRACT",
                mumbaiNFTcontract: new ethers.Contract(mumbaiNFTAddress, NFTabi, signer || provider),
            });
            dispatch({
                type: "UPDATE_MULTICHAIN_VERIFIER",
                multiChainVerifier: new ethers.Contract(multiChainVerifier, multiChainVerifierAbi, signer || provider),
            });
            dispatch({
                type: "UPDATE_MULTIPASS_MUMBAI",
                multiPassMumbai: new ethers.Contract(multiPassMumbai, multipassABI, signer || provider),
            });
            dispatch({
                type: "UPDATE_MULTIPASS_SEPOLIA",
                multiPassSepolia: new ethers.Contract(multiPassSepolia, multipassABI, signer || provider),
            });
            dispatch({
                type: "UPDATE_SEPOLIA_NFT_CONTRACT",
                sepoliaNFTcontract: new ethers.Contract(mumbaiNFTAddress, NFTabi, signer || provider),
            });
            dispatch({
                type: "UPDATE_MULTIPASS_ARBITRUM",
                multiPassArbitrum: new ethers.Contract(multiPassArbitrum, multipassABI, signer || provider),
            });
            dispatch({
                type: "UPDATE_ARBITRUM_NFT_CONTRACT",
                arbitrumNFTcontract: new ethers.Contract(arbitrumNFTAddress, NFTabi, signer || provider),
            });
            dispatch({
                type: "UPDATE_MULTIPASS_OPTIMISM",
                multiPassOptimism: new ethers.Contract(multiPassOptimism, multipassABI, signer || provider),
            });
            dispatch({
                type: "UPDATE_OPTIMISM_NFT_CONTRACT",
                optimismNFTcontract: new ethers.Contract(optimismNFTAddress, NFTabi, signer || provider),
            });
            dispatch({
                type: "UPDATE_MULTIPASS_GNOSIS",
                multiPassGnosis: new ethers.Contract(multiPassGnosis, multipassABI, signer || provider),
            });
            dispatch({
                type: "UPDATE_GNOSIS_NFT_CONTRACT",
                gnosisNFTcontract: new ethers.Contract(gnosisNFTAddress, NFTabi, signer || provider),
            });
        }
    }, [provider, signer]);

    useEffect(() => {
        const walletData = window.localStorage.getItem("monumentsmen");
        if (walletData) {
            const pastConnectedWallets = JSON.parse(walletData);
            if (pastConnectedWallets?.length > 0)
                connect({
                    autoSelect: { label: pastConnectedWallets[0], disableModals: true },
                });
        }
    }, []);

    useEffect(() => {
        if (wallets) {
            let connected: string[] = [];
            if (wallets?.length > 0) {
                connected = wallets.map(({ label }) => label);
            }
            window.localStorage.setItem("monumentsmen", JSON.stringify(connected));
        }
    }, [wallets]);

    return {
        wallet,
        connecting,
        handleConnect,
    };
};

export default useConnect;
