import { State } from "./store";

export type Action = {
    type: "UPDATE_DIAMOND";
    NFTcontract: State["NFTcontract"];
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "UPDATE_DIAMOND":
            return {
                ...state,
                NFTcontract: action.NFTcontract,
            };

        default:
            throw "Bad action type";
    }
};
