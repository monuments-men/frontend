import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./Container";

export default function Footer() {
    const navigation = ["Product", "Features"];
    return (
        <>
            <Container>
                <div className="mx-auto mt-5 flex w-full max-w-screen-xl items-start justify-between border-t border-gray-100 pt-10 dark:border-trueGray-700">
                    <div className="w-2/5">
                        <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                            <Image src="/img/logo.svg" alt="N" width="32" height="32" className="w-8" />
                            <span>Monuments Men</span>
                        </Link>
                    </div>

                    <div className="flex w-1/5 justify-center">
                        {navigation.map((item, index) => (
                            <Link
                                key={index}
                                href="/"
                                className="w-full rounded-md px-4 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="relative w-2/5">
                        <div className="absolute right-0">
                            <div className="flex text-gray-400 dark:text-gray-500">
                                <a href="https://twitter.com/web3templates" target="_blank" rel="noopener">
                                    <span className="sr-only">Twitter</span>
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

const Twitter = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
    </svg>
);
