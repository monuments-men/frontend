import AppHero from "components/App/Hero";
import { benefitTwo } from "lib/data";

const AppHome = () => {
    return (
        <div>
            <AppHero imgPos="left" data={benefitTwo} />
        </div>
    );
};

export default AppHome;
