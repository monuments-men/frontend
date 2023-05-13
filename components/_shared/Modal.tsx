import React from "react";
import Image from "next/image";

type ButtonType = {
    label: string;
    img?: any;
    color: string;
};

interface ModalProps {
    openModal: boolean;
    buttons: ButtonType[];
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ openModal, buttons, closeModal }) => {
    if (!openModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 left-0 top-0 bg-black opacity-50"></div>
            <div className="z-10 rounded-lg bg-white p-10 shadow-lg">
                <div className="flex justify-between">
                    <h2 className="mb-4 text-xl font-bold text-black">Select:</h2>
                    <div className="-mr-4 -mt-7 cursor-pointer text-2xl font-semibold text-gray-700" onClick={closeModal}>
                        x
                    </div>
                </div>
                <ul className="space-y-4">
                    {buttons.map((button, index) => (
                        <div key={index} className={`flex ${button.color} items-center gap-3 rounded-lg shadow-md`}>
                            {button.img && (
                                <div className="relative h-[50px] w-[50px]">
                                    <Image src={button.img} alt="logo" fill className="rounded-lg" />
                                </div>
                            )}
                            <button className="w-[150px] rounded py-3 text-lg font-semibold">{button.label}</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
