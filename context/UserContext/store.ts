import { providers } from "ethers";

export interface State {
    provider: providers.JsonRpcProvider | undefined;
    signer: providers.JsonRpcSigner | undefined;
    address: string;

    messageToShow: string;
}

export const initialState: State = {
    provider: undefined,
    signer: undefined,
    address: "",

    messageToShow: "",
};
