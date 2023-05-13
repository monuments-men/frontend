import Container from "components/_shared/Container";
import React from "react";

interface Props {
    align?: "left" | "center";
    pretitle?: string;
    title?: string;
    children?: React.ReactNode;
}

const SectionTitle = ({ align, pretitle, title, children }: Props) => {
    return (
        <Container className={`mt-4 flex w-full flex-col ${align === "left" ? "" : "items-center justify-center text-center"}`}>
            {pretitle && <div className="text-sm font-bold uppercase tracking-wider text-indigo-600">{pretitle}</div>}

            {title && (
                <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
                    {title}
                </h2>
            )}

            {children && <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">{children}</p>}
        </Container>
    );
};

export default SectionTitle;
