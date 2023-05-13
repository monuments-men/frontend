import Image from "next/image";

import lensLogo from "../../public/img/logos/lens-logo.jpeg";
import polygonLogo from "../../public/img/logos/polygon-logo.jpeg";
import worldCoinLogo from "../../public/img/logos/worldcoin-logo.jpeg";

const GenericButton = () => {
    const buttons = [
        { label: "Lens", img: lensLogo },
        { label: "WorldCoin", img: worldCoinLogo },
        { label: "PolygonId", img: polygonLogo },
        { label: "No ID" },
    ];
    return (
        <div>
            {buttons.map((button, i) => {
                return (
                    <div className="flex items-center gap-3">
                        <Image src={button.img} alt="logo" />
                        {button.label}
                    </div>
                );
            })}
        </div>
    );
};

export default GenericButton;
