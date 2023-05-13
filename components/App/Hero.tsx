import Container from "components/_shared/Container";
import Image from "next/image";
import React, { useEffect } from "react";
import lensLogo from "/public/img/logos/lens-logo.jpeg";
import worldCoinLogo from "/public/img/logos/worldcoin-logo.jpeg";
import polygonLogo from "../../public/img/logos/polygon-logo.png";
import { useConnectWallet, useSetChain } from "@web3-onboard/react";

const AppHero = ({ data, imgPos }) => {
    const [{ wallet }] = useConnectWallet();
    const [{ connectedChain }, setChain] = useSetChain();

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
                            {buttons.map((button, index) => (
                                <div key={index} className={`flex ${button.color} w-[300px] items-center gap-3 rounded-lg shadow-md`}>
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