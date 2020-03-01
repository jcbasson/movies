import * as React from "react";
import { Layout, LeftColumn, RightColumn, Content } from "./styled";
import MoviesList from "./components/movieList";
import MovieSearchBar from "./components/movieSearchBar";
import MoviePager from "./components/moviePager";

interface IMovies {
  defaultMovieTitle?: string;
  defaultPage?: number;
}

const Movies: React.FC<IMovies> = props => {
  return (
    <Layout>
      <LeftColumn>
        <MovieSearchBar></MovieSearchBar>
        <Content>
          <MoviesList {...props} />
        </Content>
        <MoviePager />
      </LeftColumn>
      <RightColumn></RightColumn>
    </Layout>
  );
};

export default Movies;
