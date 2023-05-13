import { State } from "./store";

export type Action =
    | {
          type: "UPDATE_DIAMOND";
          NFTcontract: State["NFTcontract"];
      }
    | {
          type: "UPDATE_MUMBAI_LENS";
          mumbaiLens: State["mumbaiLens"];
      };

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "UPDATE_DIAMOND":
            return {
                ...state,
                NFTcontract: action.NFTcontract,
            };
        case "UPDATE_MUMBAI_LENS":
            return {
                ...state,
                mumbaiLens: action.mumbaiLens,
            };

        default:
            throw "Bad action type";
    }
};
