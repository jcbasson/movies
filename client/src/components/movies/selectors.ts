import { createSelector } from "reselect";
import {
  MovieTitleSelector,
  MoviePageNumSelector,
  MovieIdSelector,
  MovieTotalResultsSelector
} from "./types";
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

export const movieTitleSelector: MovieTitleSelector = state =>
  get(state, "movies.searchedTitle", "");

export const moviePageNumSelector: MoviePageNumSelector = state =>
  get(state, "movies.page", "");

export const movieIdSelector: MovieIdSelector = state =>
  get(state, "movies.selectedId", "");

export const movieTotalResultsSelector: MovieTotalResultsSelector = state =>
  get(state, "movies.totalResults", 0);
