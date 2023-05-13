import { useSetChain } from "@web3-onboard/react";
import Container from "components/_shared/Container";
<<<<<<< HEAD
import { useContractContext } from "context/ContractContext";
import { useState } from "react";
=======
import ScrollDown from "components/_shared/ScrollDown";
>>>>>>> 4a6106e (feat:scrolldown)

const Hero = () => {
    const [{ connectedChain }, setChain] = useSetChain();
    const [{ NFTcontract }] = useContractContext();

    const [minting, setMinting] = useState(false);
    const [minted, setMinted] = useState(false);

    const mint = async () => {
        try {
            const tx = await NFTcontract.mint();
            setMinting(true);
            const receipt = await tx.wait();
            if (receipt.status == 1) {
                setMinted(true);
                setMinting(false);
            }
        } catch (error) {
            setMinting(false);
            console.log(error);
        }
    };

    const mintButtonTxt = minting ? "Minting..." : minted ? "Minted" : "Mint your NFT";

    return (
        <>
            <Container className="flex flex-wrap ">
                <div className="flex w-full items-center lg:w-1/2">
                    <div className="mb-8 max-w-2xl">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            Free Landing Page Template for startups
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
                            Monuments Men is a free landing page & marketing website template for startups and indie projects. Its built with Next.js
                            & TailwindCSS. And its completely open-source.
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                            <div
                                onClick={mint}
                                className="cursor-pointer rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white hover:opacity-80"
                            >
                                {mintButtonTxt}
                            </div>
                            <ScrollDown />
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center lg:w-1/2">
                    <img src="/img/hero.png" alt="Hero Illustration" className="h-[617px] w-[616px] object-cover" />
                </div>
            </Container>
        </>
    );
};

export default Hero;
