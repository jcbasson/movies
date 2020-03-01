import {
  SET_SELECTED_MOVIE_ID,
  SET_SEARCHED_MOVIE_TITLE,
  SET_MOVIES_PAGE_NUMBER,
  SET_MOVIES_TOTAL_RESULTS
} from "./actions";

const defaultState = {
  selectedId: null,
  searchedTitle: null,
  page: 1,
  totalResults: 0
};

export const moviesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_SELECTED_MOVIE_ID:
      return { ...state, selectedId: action.id };
    case SET_SEARCHED_MOVIE_TITLE:
      return { ...state, searchedTitle: action.title };
    case SET_MOVIES_PAGE_NUMBER:
      return { ...state, page: action.page };
    case SET_MOVIES_TOTAL_RESULTS:
      return { ...state, totalResults: action.totalResults };
    default:
      return state;
  }
};
