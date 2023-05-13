import { useConnectWallet, useWallets } from "@web3-onboard/react";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { ethers } from "ethers";
import { useContractContext } from "../context/ContractContext";

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
      //   dispatch({
      //     type: "UPDATE_DIAMOND",
      //     diamond: new ethers.Contract(
      //       GT_DIAMOND_ADDRESS,
      //       diamondAbi,
      //       signer || provider
      //     ),
      //   });
    }
  }, [provider, signer]);

  useEffect(() => {
    const walletData = window.localStorage.getItem(
      "galaxyThroneConnectedWallets"
    );
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
      window.localStorage.setItem(
        "galaxyThroneConnectedWallets",
        JSON.stringify(connected)
      );
    }
  }, [wallets]);

  return {
    wallet,
    connecting,
    handleConnect,
  };
};

export default useConnect;
