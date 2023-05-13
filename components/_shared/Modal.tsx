import React from "react";

type ModalProps = {
    openModal: boolean;
    buttons: string[];
};

const Modal: React.FC<ModalProps> = ({ openModal, buttons }) => {
    if (!openModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-4 text-xl font-bold">Modal</h2>
                <ul className="space-y-4">
                    {buttons.map((button, index) => (
                        <li key={index}>
                            <button className="rounded bg-blue-500 px-4 py-2 text-white">{button}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
