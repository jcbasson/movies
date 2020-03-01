import {
  SetSelectedMovieId,
  SetSearchedMovieTitle,
  SetMoviesPageNumber,
  SetMovieTotalResults
} from "./types";

export const SET_SELECTED_MOVIE_ID = "SET_SELECTED_MOVIE_ID";
export const SET_SEARCHED_MOVIE_TITLE = "SET_SEARCHED_MOVIE_TITLE";
export const SET_MOVIES_PAGE_NUMBER = "SET_MOVIES_PAGE_NUMBER";
export const SET_MOVIES_TOTAL_RESULTS = "SET_MOVIES_TOTAL_RESULTS";

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

export const setMovieTotalResults: SetMovieTotalResults = totalResults => {
  return {
    type: SET_MOVIES_TOTAL_RESULTS,
    totalResults
  };
};
