import {
  SetSelectedMovieId,
  SetSearchedMovieTitle,
  SetMoviesPageNumber
} from "./types";

export const SET_SELECTED_MOVIE_ID = "SET_SELECTED_MOVIE_ID";
export const SET_SEARCHED_MOVIE_TITLE = "SET_SEARCHED_MOVIE_TITLE";
export const SET_MOVIES_PAGE_NUMBER = "SET_MOVIES_PAGE_NUMBER";

export const setSelectedMovieId: SetSelectedMovieId = id => {
  return {
    type: SET_SELECTED_MOVIE_ID,
    id
  };
};

export const setSearchedMovieTitle: SetSearchedMovieTitle = title => {
  return {
    type: SET_SEARCHED_MOVIE_TITLE,
    title
  };
};

export const setMoviesPageNumber: SetMoviesPageNumber = page => {
  return {
    type: SET_MOVIES_PAGE_NUMBER,
    page
  };
};
