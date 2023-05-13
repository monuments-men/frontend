import React from "react";

const blockchainList = [
    { id: 1, name: "Bitcoin" },
    { id: 2, name: "Ethereum" },
    { id: 3, name: "Binance Smart Chain" },
    { id: 4, name: "Cardano" },
    { id: 5, name: "Polkadot" },
];

const ScrollDownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedBlockchain, setSelectedBlockchain] = React.useState("");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (blockchain: string) => {
        setSelectedBlockchain(blockchain);
        setIsOpen(false);
    };

    return (
        <div className="relative w-48">
            <button
                type="button"
                onClick={handleToggle}
                className="w-full rounded-md border border-gray-300 px-8 py-4 text-lg font-medium focus:outline-none"
            >
                {selectedBlockchain ? selectedBlockchain : "Seleziona una blockchain"}
            </button>

            {isOpen && (
                <ul className="absolute mt-2 w-full rounded-md border border-gray-300 bg-white py-2 shadow-lg">
                    {blockchainList.map((blockchain) => (
                        <li key={blockchain.id} className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect(blockchain.name)}>
                            {blockchain.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ScrollDownMenu;
