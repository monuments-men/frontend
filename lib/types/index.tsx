export type NetworkType =
    | "Arbitrum (Goerli)"
    | "Optimism (Goerli)"
    | "zkEVM (Goerli)"
    | "Polygon (Mumbai)"
    | "Gnosis (Testnet)"
    | "Linea (Testnet)"
    | "Fuji (Testnet)"
    | "Polygon (Mainnet)";

export interface BlockchainType {
    name: NetworkType;
    img: string;
    chainId: string;
}
