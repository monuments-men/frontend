import Container from "components/_shared/Container";
import { useContractContext } from "context/ContractContext";
import { useState } from "react";
import ScrollDown from "components/_shared/ScrollDown";

const Hero = () => {
    const [
        {
            mumbaiNFTcontract,
            selectedNetwork,
            multiPassMumbai,
            sepoliaNFTcontract,
            multiPassSepolia,
            multiPassArbitrum,
            multiPassGnosis,
            multiPassOptimism,
            gnosisNFTcontract,
            arbitrumNFTcontract,
            optimismNFTcontract,
        },
    ] = useContractContext();

    const [minting, setMinting] = useState(false);
    const [minted, setMinted] = useState(false);

    const networksContracts = {
        "Polygon (Mumbai)": {
            nftContract: mumbaiNFTcontract,
            multiPass: multiPassMumbai,
        },
        "Sepolia (Testnet)": {
            nftContract: sepoliaNFTcontract,
            multiPass: multiPassSepolia,
        },
        "Arbitrum (Goerli)": {
            nftContract: arbitrumNFTcontract,
            multiPass: multiPassArbitrum,
        },
        "Optimism (Goerli)": {
            nftContract: optimismNFTcontract,
            multiPass: multiPassOptimism,
        },
        "Gnosis (Testnet)": {
            nftContract: gnosisNFTcontract,
            multiPass: multiPassGnosis,
        },
    };

    const mint = async () => {
        try {
            const contractToCall = networksContracts[selectedNetwork].nftContract;
            const tx = await contractToCall.mint();
            setMinting(true);
            const receipt = await tx.wait();
            if (receipt.status == 1) {
                console.log("MINTED");
                setMinted(true);
                setMinting(false);
                const tx1 = await networksContracts[selectedNetwork].multiPass.checkFees("10109", "0x1e049eE762A31c27588d522c596045616C8d5Cf4");
                console.log("TX1", tx1);
                const tx2 = await networksContracts[selectedNetwork].multiPass.broadcastNFTOwnership(
                    "10109",
                    "0x1e049eE762A31c27588d522c596045616C8d5Cf4",
                    { value: tx1 }
                );
                const receipt2 = await tx2.wait();
                if (receipt2.status == 1) {
                    console.log("NFT ownership broadcasted");
                }
            }
        } catch (error) {
            setMinting(false);
            console.log(error);
        }
    };

    const mintButtonTxt = minting ? "Minting..." : minted ? "Minted" : "Mint";

    return (
        <>
            <Container className="flex flex-wrap ">
                <div className="flex w-full items-center lg:w-1/2">
                    <div className="mb-8 max-w-2xl">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            Mint your NFT now!
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
                            By owning Monuments Men NFT you will be able to add your name or an image of your choice to the giant monument NFT. <br />{" "}
                            <br />
                            Mint it in whatever blockchain you want! We are going to verify with a bridge that you own the NFT and you will be able to
                            add all the functionalities.
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                            <div
                                onClick={mint}
                                className="w-[170px] cursor-pointer rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white hover:opacity-80"
                            >
                                {mintButtonTxt}
                            </div>
                            <ScrollDown />
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-start justify-center lg:w-1/2">
                    <img src="/img/landing.png" alt="Hero Illustration" className="h-[617px] w-[616px] rounded-xl object-cover" />
                </div>
            </Container>
        </>
    );
};

export default Hero;
