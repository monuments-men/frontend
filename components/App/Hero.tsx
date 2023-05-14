import Container from "components/_shared/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import lensLogo from "/public/img/logos/lens-logo.jpeg";
import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import { useContractContext } from "context/ContractContext";
import { useUserContext } from "context/UserContext";
import { ethers } from "ethers";
import { lensAddress } from "lib/contracts";
import ERC721 from "lib/contracts/abi/ERC721.json";
import { maticChainId } from "lib";
import WorldcoinVerify from "components/Worldcoin";
import SectionTitle from "components/LandingPage/SectionTitle";

const AppHero = ({ data, imgPos }) => {
    const [{ wallet }] = useConnectWallet();
    const [{ connectedChain }, setChain] = useSetChain();
    const [{ lens, multiChainVerifier }, dispatch] = useContractContext();
    const [{ address, signer, provider, messageToShow }, userDispatch] = useUserContext();
    const previousChainId = useRef<string>();
    const [lensTokenId, setLensTokenId] = useState<string>("");

    useEffect(() => {
        if (wallet && connectedChain?.id !== maticChainId) {
            setChain({ chainId: maticChainId });
        }
    }, [connectedChain, wallet]);

    const buttons = [
        { label: "No ID", color: "bg-gray-900 text-white dark:bg-gray-600", diabled: false },
        { label: "Lens", img: lensLogo, color: "text-green-600", diabled: false },
    ];

    const verifyWithLens = async () => {
        try {
            const tx = await multiChainVerifier.registerWithLens(lensTokenId, 137, messageToShow);
            const recipt = await tx.wait();
            if (recipt.status == 1) {
                console.log("verified");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const registerWithNoID = async () => {
        try {
            const tx = await multiChainVerifier.registerWithoutId(137, messageToShow);
            console.log("tx", tx);
            const recipt = await tx.wait();
            if (recipt.status == 1) {
                console.log("verified");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const checkLens = async () => {
        try {
            const tokenAmount = await lens.balanceOf(address);
            if (Number(tokenAmount.toString()) > 0) {
                const firstToken = await lens.tokenOfOwnerByIndex(address, 0);
                setLensTokenId(firstToken.toString());
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!previousChainId.current && connectedChain?.id === maticChainId) {
            previousChainId.current = connectedChain.id;
        }
        if (previousChainId?.current !== connectedChain?.id && wallet) {
            window.location.reload();
        }
    }, [connectedChain?.id]);

    useEffect(() => {
        if ((signer || provider) && connectedChain?.id === maticChainId) {
            dispatch({
                type: "UPDATE_LENS",
                lens: new ethers.Contract(lensAddress, ERC721, signer || provider),
            });
        }
    }, [signer, provider, connectedChain]);

    useEffect(() => {
        if (lens) {
            checkLens();
        }
    }, [lens]);

    const handleInputChange = (e) => {
        userDispatch({
            type: "UPDATE_MESSAGE_TO_SHOW",
            messageToShow: e.target.value,
        });
    };

    return (
        <>
            <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
                <div className={`flex w-full items-center justify-center lg:w-1/2 ${imgPos === "right" ? "lg:order-1" : ""}`}>
                    <div>
                        <img src="/img/hero-2.png" alt="Benefits" className={"h-[500px] w-[610px] rounded-xl object-cover"} />
                    </div>
                </div>

                <div className={`flex w-full flex-wrap items-center lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""}`}>
                    <div>
                        <div className="mt-4 flex w-full flex-col">
                            <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
                                {data.title}
                            </h3>

                            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
                                {data.desc}
                            </p>
                        </div>

                        <div className="mt-5 flex w-full flex-col gap-3">
                            {"1)"} Write a message to show in the monument:
                            <div className=" flex w-[400px] cursor-pointer items-center gap-5 rounded-lg shadow-md dark:bg-white">
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    maxLength={20}
                                    className="w-full rounded px-4 py-3 text-lg font-semibold outline-none"
                                    placeholder="put some text to show in the monument nft"
                                />
                            </div>
                        </div>

                        <div className="mt-5 flex w-full flex-col gap-3">
                            {"2)"} Register with:
                            {buttons.map((button, index) => (
                                <div
                                    key={index}
                                    onClick={() => (button.label === "Lens" ? verifyWithLens() : registerWithNoID())}
                                    className={`flex ${button.color} ${
                                        button.diabled && "cursor-not-allowed bg-gray-600 text-white"
                                    } w-[400px] cursor-pointer items-center gap-5 rounded-lg shadow-md dark:bg-white`}
                                >
                                    {button.img && (
                                        <div className="relative h-[50px] w-[50px]">
                                            <Image src={button.img} alt="logo" fill className="rounded-lg" />
                                        </div>
                                    )}
                                    <div className={`w-[150px] rounded py-3 text-lg font-semibold ${button.label === "No ID" && "ml-[70px]"}`}>
                                        {button.label}
                                    </div>
                                </div>
                            ))}
                            <WorldcoinVerify />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <SectionTitle pretitle="Result sample" title="You are going to put your name or message in the white screens">
                    By minting an nft on a network of your preference you will be able to use functionalities on polygon <br /> <br />
                    You just need to own it
                </SectionTitle>
                <img src="/img/sample.jpg" className="rounded-xl" />
            </Container>
        </>
    );
};

export default AppHero;
