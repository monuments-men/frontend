import Container from "components/_shared/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import lensLogo from "/public/img/logos/lens-logo.jpeg";
import worldCoinLogo from "/public/img/logos/worldcoin-logo.jpeg";
import polygonLogo from "../../public/img/logos/polygon-logo.png";
import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import { useContractContext } from "context/ContractContext";
import { useUserContext } from "context/UserContext";
import { ethers } from "ethers";
import { lensMumbaiAddress } from "lib/contracts";
import ERC721 from "lib/contracts/abi/ERC721.json";

const AppHero = ({ data, imgPos }) => {
    const [{ wallet }] = useConnectWallet();
    const [{ connectedChain }, setChain] = useSetChain();
    const [{ mumbaiLens }, dispatch] = useContractContext();
    const [{ address, signer, provider }] = useUserContext();
    const previousChainId = useRef<string>();
    const [lensTokenId, setLensTokenId] = useState<string>("");

    useEffect(() => {
        if (wallet && connectedChain?.id !== "0x13881") {
            setChain({ chainId: "0x13881" });
        }
    }, [connectedChain, wallet]);

    const buttons = [
        { label: "Lens", img: lensLogo, color: "text-green-600" },
        { label: "WorldCoin", img: worldCoinLogo, color: "text-black" },
        { label: "PolygonId", img: polygonLogo, color: "text-[#7823BA]" },
        { label: "No ID", color: "bg-gray-900 text-white" },
    ];

    const checkLens = async () => {
        try {
            const tokenAmount = await mumbaiLens.balanceOf(address);
            if (Number(tokenAmount.toString()) > 0) {
                const firstToken = await mumbaiLens.tokenOfOwnerByIndex(address, 0);
                setLensTokenId(firstToken.toString());
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!previousChainId.current && connectedChain?.id === "0x13881") {
            previousChainId.current = connectedChain.id;
        }
        if (previousChainId?.current !== connectedChain?.id && wallet) {
            window.location.reload();
        }
    }, [connectedChain?.id]);

    useEffect(() => {
        if ((signer || provider) && connectedChain?.id === "0x13881") {
            dispatch({
                type: "UPDATE_MUMBAI_LENS",
                mumbaiLens: new ethers.Contract(lensMumbaiAddress, ERC721, signer || provider),
            });
        }
    }, [signer, provider, connectedChain]);

    useEffect(() => {
        if (mumbaiLens) {
            checkLens();
        }
    }, [mumbaiLens]);

    return (
        <>
            <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
                <div className={`flex w-full items-center justify-center lg:w-1/2 ${imgPos === "right" ? "lg:order-1" : ""}`}>
                    <div>
                        <Image
                            src={data.image}
                            width="521"
                            height="410"
                            alt="Benefits"
                            className={"object-cover"}
                            placeholder="blur"
                            blurDataURL={data.image.src}
                        />
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
                            Register with:
                            {buttons.map((button, index) => (
                                <div
                                    key={index}
                                    className={`flex ${button.color} w-[300px] items-center gap-3 rounded-lg shadow-md hover:opacity-90`}
                                >
                                    {button.img && (
                                        <div className="relative h-[50px] w-[50px]">
                                            <Image src={button.img} alt="logo" fill className="rounded-lg" />
                                        </div>
                                    )}
                                    <button className="w-[150px] rounded py-3 text-lg font-semibold">{button.label}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AppHero;
