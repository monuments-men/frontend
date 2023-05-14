import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
    title: "Highlight your benefits",
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: benefitOneImg,
    bullets: [
        {
            title: "Understand your customers",
            desc: "Then explain the first point breifly in one or two lines.",
            icon: <FaceSmileIcon />,
        },
        {
            title: "Improve acquisition",
            desc: "Here you can add the next benefit point.",
            icon: <ChartBarSquareIcon />,
        },
        {
            title: "Drive customer retention",
            desc: "This will be your last bullet point in this section.",
            icon: <CursorArrowRaysIcon />,
        },
    ],
};

const benefitTwo = {
    title: "Leave your mark in Convento do Beato",
    desc: "Register with Lens or Worldcoin to have the best spot in the monument NFT, otherwise you can still register without an ID for a side spot",
};

export { benefitOne, benefitTwo };
