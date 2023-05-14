import { State } from "./store";

export type UserAction =
    | { type: "UPDATE_PROVIDER"; provider: State["provider"] }
    | { type: "UPDATE_ADDRESS"; address: State["address"] }
    | { type: "UPDATE_SIGNER"; signer: State["signer"] }
    | { type: "UPDATE_MESSAGE_TO_SHOW"; messageToShow: State["messageToShow"] };

export const reducer = (state: State, action: UserAction): State => {
    switch (action.type) {
        case "UPDATE_PROVIDER":
            return { ...state, provider: action.provider };
        case "UPDATE_ADDRESS":
            return { ...state, address: action.address };
        case "UPDATE_SIGNER":
            return { ...state, signer: action.signer };
        case "UPDATE_MESSAGE_TO_SHOW":
            return { ...state, messageToShow: action.messageToShow };

        default:
            throw "Bad action type";
    }
};
