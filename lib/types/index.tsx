export type NetworkType =
    | "Arbitrum (Goerli)"
    | "Optimism (Goerli)"
    | "zkEVM (Goerli)"
    | "Polygon (Mumbai)"
    | "Gnosis (Testnet)"
    | "Sepolia (Testnet)";

export interface BlockchainType {
    name: NetworkType;
    img: string;
    chainId: string;
}
