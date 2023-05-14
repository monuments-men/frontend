import { State } from "./store";

export type Action =
    | { type: "UPDATE_SELECTED_NETWORK"; selectedNetwork: State["selectedNetwork"] }
    | { type: "UPDATE_MUMBAI_NFT_CONTRACT"; mumbaiNFTcontract: State["mumbaiNFTcontract"] }
    | { type: "UPDATE_LENS"; lens: State["lens"] }
    | { type: "UPDATE_MULTICHAIN_VERIFIER"; multiChainVerifier: State["multiChainVerifier"] }
    | { type: "UPDATE_MULTIPASS_MUMBAI"; multiPassMumbai: State["multiPassMumbai"] }
    | { type: "UPDATE_MULTIPASS_SEPOLIA"; multiPassSepolia: State["multiPassSepolia"] }
    | { type: "UPDATE_SEPOLIA_NFT_CONTRACT"; sepoliaNFTcontract: State["sepoliaNFTcontract"] }
    | { type: "UPDATE_MULTIPASS_ARBITRUM"; multiPassArbitrum: State["multiPassArbitrum"] }
    | { type: "UPDATE_ARBITRUM_NFT_CONTRACT"; arbitrumNFTcontract: State["arbitrumNFTcontract"] }
    | { type: "UPDATE_MULTIPASS_OPTIMISM"; multiPassOptimism: State["multiPassOptimism"] }
    | { type: "UPDATE_OPTIMISM_NFT_CONTRACT"; optimismNFTcontract: State["optimismNFTcontract"] }
    | { type: "UPDATE_MULTIPASS_GNOSIS"; multiPassGnosis: State["multiPassGnosis"] }
    | { type: "UPDATE_GNOSIS_NFT_CONTRACT"; gnosisNFTcontract: State["gnosisNFTcontract"] };

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
        case "UPDATE_LENS":
            return {
                ...state,
                lens: action.lens,
            };
        case "UPDATE_MULTICHAIN_VERIFIER":
            return {
                ...state,
                multiChainVerifier: action.multiChainVerifier,
            };
        case "UPDATE_MULTIPASS_MUMBAI":
            return {
                ...state,
                multiPassMumbai: action.multiPassMumbai,
            };
        case "UPDATE_MULTIPASS_SEPOLIA":
            return {
                ...state,
                multiPassSepolia: action.multiPassSepolia,
            };
        case "UPDATE_SEPOLIA_NFT_CONTRACT":
            return {
                ...state,
                sepoliaNFTcontract: action.sepoliaNFTcontract,
            };
        case "UPDATE_MULTIPASS_ARBITRUM":
            return {
                ...state,
                multiPassArbitrum: action.multiPassArbitrum,
            };
        case "UPDATE_ARBITRUM_NFT_CONTRACT":
            return {
                ...state,
                arbitrumNFTcontract: action.arbitrumNFTcontract,
            };
        case "UPDATE_MULTIPASS_OPTIMISM":
            return {
                ...state,
                multiPassOptimism: action.multiPassOptimism,
            };
        case "UPDATE_OPTIMISM_NFT_CONTRACT":
            return {
                ...state,
                optimismNFTcontract: action.optimismNFTcontract,
            };
        case "UPDATE_MULTIPASS_GNOSIS":
            return {
                ...state,
                multiPassGnosis: action.multiPassGnosis,
            };
        case "UPDATE_GNOSIS_NFT_CONTRACT":
            return {
                ...state,
                gnosisNFTcontract: action.gnosisNFTcontract,
            };

        default:
            throw "Bad action type";
    }
};
