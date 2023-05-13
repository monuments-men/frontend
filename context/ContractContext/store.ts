import { NetworkType } from "lib/types";

export interface State {
    selectedNetwork: NetworkType;

    multiChainVerifier: any;

    mumbaiNFTcontract: any;
    lens: any;
    fujiNFTcontract: any;
}

export const initialState: State = {
    selectedNetwork: undefined,

    multiChainVerifier: undefined,

    mumbaiNFTcontract: undefined,
    lens: undefined,
    fujiNFTcontract: undefined,
};
