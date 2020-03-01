import * as React from "react";
import { Layout, LeftColumn, RightColumn } from "./styled";
import MoviesList from "./components/movieList";
import MovieSearchBar from "./components/movieSearchBar";

interface IMovies {
  defaultMovieTitle?: string;
  defaultPage?: number;
}

const Movies: React.FC<IMovies> = props => {
  return (
    <Layout>
      <LeftColumn>
        <MovieSearchBar></MovieSearchBar>
        <MoviesList {...props} />
      </LeftColumn>
      <RightColumn></RightColumn>
    </Layout>
  );
};

export default Movies;
