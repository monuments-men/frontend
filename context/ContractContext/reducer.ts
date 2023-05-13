import { State } from "./store";

export type Action =
    | { type: "UPDATE_SELECTED_NETWORK"; selectedNetwork: State["selectedNetwork"] }
    | { type: "UPDATE_MUMBAI_NFT_CONTRACT"; mumbaiNFTcontract: State["mumbaiNFTcontract"] }
    | { type: "UPDATE_MUMBAI_LENS"; mumbaiLens: State["mumbaiLens"] }
    | { type: "UPDATE_FUJI_NFT_CONTRACT"; fujiNFTcontract: State["fujiNFTcontract"] }
    | { type: "UPDATE_MULTICHAIN_VERIFIER"; multiChainVerifier: State["multiChainVerifier"] };

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "UPDATE_SELECTED_NETWORK":
            return {
                ...state,
                selectedNetwork: action.selectedNetwork,
            };
        case "UPDATE_MUMBAI_NFT_CONTRACT":
            return {
                ...state,
                mumbaiNFTcontract: action.mumbaiNFTcontract,
            };
        case "UPDATE_MUMBAI_LENS":
            return {
                ...state,
                mumbaiLens: action.mumbaiLens,
            };
        case "UPDATE_FUJI_NFT_CONTRACT":
            return {
                ...state,
                fujiNFTcontract: action.fujiNFTcontract,
            };
        case "UPDATE_MULTICHAIN_VERIFIER":
            return {
                ...state,
                multiChainVerifier: action.multiChainVerifier,
            };

        default:
            throw "Bad action type";
    }
};
