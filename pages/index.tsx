import Head from "next/head";
import { benefitOne } from "../lib/data";
import Hero from "components/LandingPage/Hero";
import SectionTitle from "components/LandingPage/SectionTitle";
import Video from "components/LandingPage/Video";
import Testimonials from "components/LandingPage/Testimonials";
import Faq from "components/LandingPage/Faq";
import Cta from "components/LandingPage/Cta";
import Benefits from "components/LandingPage/Benefits";

const Home = () => {
    return (
        <>
            <Head>
                <title>Monuments Men - Free Nextjs & TailwindCSS Landing Page Template</title>
                <meta name="description" content="Monuments Men is a free landing page template built with next.js & Tailwind CSS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <SectionTitle pretitle="Monuments Men Benefits" title=" Why should you use this landing page">
                Monuments Men is a free landing page & marketing website template for startups and indie projects. Its built with Next.js &
                TailwindCSS. And its completely open-source.
            </SectionTitle>
            <Benefits data={benefitOne} />
            <SectionTitle pretitle="Watch a video" title="Learn how to fullfil your needs">
                This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has 3% more conversion
                rate. So, don&apos;t forget to add one. Just like this.
            </SectionTitle>
            <Video />
            <SectionTitle pretitle="Testimonials" title="Here's what our customers said">
                Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers.
            </SectionTitle>
            <Testimonials />
            <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
                Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.
            </SectionTitle>
            <Faq />
            <Cta />
        </>
    );
};

export default Home;
