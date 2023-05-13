import { useCallback } from "react";
import { IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";

export default function Home({ address }) {
    const handleProof = (result: ISuccessResult) => {
        console.log(result);
        // call registerWithWorldcoin using nullifierHash and proof from the result
    };

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            <IDKitWidget
                action="register"
                signal={address}
                handleVerify={handleProof}
                app_id="app_4dbefa59fdf71b9b734938badbf9c23b"
                // walletConnectProjectId="get_this_from_walletconnect_portal"
            >
                {({ open }) => <button onClick={open}>Click me</button>}
            </IDKitWidget>
        </div>
    );
}
