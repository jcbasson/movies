import React from "react";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { Layout } from "./styled";
import { IMovieData } from "../../types";
import MovieItem from "../movieItem";

interface IMovieList {
  movies: Pick<IMovieData, "imdbID" | "Title" | "Year">[];
}

const MovieList: React.FC<IMovieList> = ({ movies }) => {
  return (
    <Layout>
      {!isEmpty(movies) &&
        movies.map(movie => (
          <MovieItem
            imdbID={get(movie, "imdbID", "")}
            title={get(movie, "Title", "")}
            year={get(movie, "Year", "")}
          />
        ))}
    </Layout>
  );
};

export default MovieList;
