import { Dispatch } from "redux";

export interface IState {
  movies: {
    selectedId: string;
    searchedTitle: string;
    page: number;
    totalResults: number;
  };
}

export interface IMovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
}

export type SetSelectedMovieId = (
  id: string | null
) => { type: string; id: string | null };

export type SetSearchedMovieTitle = (
  title: string
) => { type: string; title: string };

export type SetMoviesPageNumber = (
  page: number
) => { type: string; page: number };

export type SetMovieTotalResults = (
  totalResults: number
) => { type: string; totalResults: number };

export type MovieTitleAndPageNumSelector = (
  state: IState
) => { id: string; page: number };

export type MovieTotalResultsSelector = (state: IState) => number;

export type MovieTitleSelector = (state: IState) => string;

export type MoviePageNumSelector = (state: IState) => number;

export type MovieIdSelector = (state: IState) => string;
