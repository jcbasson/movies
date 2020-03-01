import { Dispatch } from "redux";

export interface IState {
  movies: {
    selectedId: string;
    searchedTitle: string;
    page: number;
  };
}

export type SetSelectedMovieId = (id: string) => { type: string; id: string };

export type SetSearchedMovieTitle = (
  title: string
) => { type: string; title: string };

export type SetMoviesPageNumber = (
  page: number
) => { type: string; page: number };

export type MovieTitleAndPageNumSelector = (
  state: IState
) => { id: string; page: number };

export type MovieTitleSelector = (state: IState) => string;

export type MoviePageNumSelector = (state: IState) => number;

// export type GenerateGlobalWarmingBarsData = (
//   dispatch: Dispatch
// ) => (globalWarmingLevels) => null
