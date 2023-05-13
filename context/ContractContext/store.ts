import { NetworkType } from "lib/types";

export interface State {
    selectedNetwork: NetworkType;

    multiChainVerifier: any;

    mumbaiNFTcontract: any;
    mumbaiLens: any;
    fujiNFTcontract: any;
}

export const initialState: State = {
    selectedNetwork: undefined,

    multiChainVerifier: undefined,

    mumbaiNFTcontract: undefined,
    mumbaiLens: undefined,
    fujiNFTcontract: undefined,
};
