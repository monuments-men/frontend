import { State } from "./store";

export type Action = {
  type: "UPDATE_DIAMOND";
  diamond: State["diamondContract"];
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_DIAMOND":
      return {
        ...state,
        diamondContract: action.diamond,
      };

    default:
      throw "Bad action type";
  }
};
