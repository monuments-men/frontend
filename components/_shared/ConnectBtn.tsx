import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import { addressShortFormat } from "../../lib";
import { useUserContext } from "../../context/UserContext";
import useConnect from "../../hooks/useConnect";

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
