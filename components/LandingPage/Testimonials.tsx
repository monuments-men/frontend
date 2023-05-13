import Image from "next/image";
import React from "react";

import Container from "components/_shared/Container";

const Testimonials = () => {
    return (
        <Container>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                <div className="lg:col-span-2 xl:col-auto">
                    <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
                        <p className="text-2xl leading-normal ">
                            Share a real <Mark>testimonial</Mark>
                            that hits some of your benefits from one of your popular customer.
                        </p>

                        <Avatar image={"/img/user1.jpg"} name="Sarah Steiner" title="VP Sales at Google" />
                    </div>
                </div>
                <div className="">
                    <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
                        <p className="text-2xl leading-normal ">
                            Make sure you only pick the <Mark>right sentence</Mark>
                            to keep it short and simple.
                        </p>

                        <Avatar image={"/img/user2.jpg"} name="Dylan Ambrose" title="Lead marketer at Netflix" />
                    </div>
                </div>
                <div className="">
                    <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
                        <p className="text-2xl leading-normal ">
                            This is an <Mark>awesome</Mark> landing page template I&apos;ve seen. I would use this for anything.
                        </p>

                        <Avatar image={"/img/user3.jpg"} name="Gabrielle Winn" title="Co-founder of Acme Inc" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

function Avatar(props) {
    return (
        <div className="mt-8 flex items-center space-x-3">
            <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                <Image src={props.image} width="40" height="40" alt="Avatar" />
            </div>
            <div>
                <div className="text-lg font-medium">{props.name}</div>
                <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
            </div>
        </div>
    );
}

function Mark(props) {
    return (
        <>
            {" "}
            <mark className="rounded-md bg-indigo-100 text-indigo-800 ring-4 ring-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 dark:ring-indigo-900">
                {props.children}
            </mark>{" "}
        </>
    );
}

export default Testimonials;
