import {
  SET_SELECTED_MOVIE_ID,
  SET_SEARCHED_MOVIE_TITLE,
  SET_MOVIES_PAGE_NUMBER
} from "./actions";

const defaultState = {
  selectedId: "tt0372784",
  searchedTitle: "Batman",
  page: 1
};

export const moviesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_SELECTED_MOVIE_ID:
      return { ...state, selectedId: action.id };
    case SET_SEARCHED_MOVIE_TITLE:
      return { ...state, searchedTitle: action.title };
    case SET_MOVIES_PAGE_NUMBER:
      return { ...state, page: action.page };
    default:
      return state;
  }
};
