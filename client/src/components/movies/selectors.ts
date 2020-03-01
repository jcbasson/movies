import { createSelector } from "reselect";
import { MovieTitleSelector, MoviePageNumSelector } from "./types";
import get from "lodash/get";

export const makeMovieTitlePageSelector = () =>
  createSelector(
    movieTitleSelector,
    moviePageNumSelector,
    (title: string, page: number): { title: string; page: number } => ({
      title,
      page
    })
  );

const movieTitleSelector: MovieTitleSelector = state =>
  get(state, "movies.searchedTitle", "");

const moviePageNumSelector: MoviePageNumSelector = state =>
  get(state, "movies.page", "");
