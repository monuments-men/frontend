import { NetworkType } from "lib/types";

export interface State {
    selectedNetwork: NetworkType;

    multiChainVerifier: any;
    lens: any;

    mumbaiNFTcontract: any;
    multiPassMumbai: any;

    sepoliaNFTcontract: any;
    multiPassSepolia: any;

    arbitrumNFTcontract: any;
    multiPassArbitrum: any;

    optimismNFTcontract: any;
    multiPassOptimism: any;

    gnosisNFTcontract: any;
    multiPassGnosis: any;
}

export const initialState: State = {
    selectedNetwork: undefined,

    multiChainVerifier: undefined,
    lens: undefined,

    mumbaiNFTcontract: undefined,
    multiPassMumbai: undefined,

    sepoliaNFTcontract: undefined,
    multiPassSepolia: undefined,

    arbitrumNFTcontract: undefined,
    multiPassArbitrum: undefined,

    optimismNFTcontract: undefined,
    multiPassOptimism: undefined,

    gnosisNFTcontract: undefined,
    multiPassGnosis: undefined,
};
