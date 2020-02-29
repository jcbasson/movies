import { DO_SOMETHING } from "./actions";

const defaultState = {};

export const moviesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case DO_SOMETHING:
      return { ...state };
    default:
      return state;
  }
};
