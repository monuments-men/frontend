import Head from "next/head";
import Hero from "components/LandingPage/Hero";
import SectionTitle from "components/LandingPage/SectionTitle";
import Video from "components/LandingPage/Video";

const Home = () => {
    return (
        <>
            <Head>
                <title>Monuments Men - Free Nextjs & TailwindCSS Landing Page Template</title>
                <meta name="description" content="Monuments Men is a free landing page template built with next.js & Tailwind CSS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <SectionTitle pretitle="Watch a video" title="Blockchain Revolution: Unleashing the Power of Decentralized Trust">
                "This is the video showcasing our project."
            </SectionTitle>
            <Video />
        </>
    );
};

export default Home;
