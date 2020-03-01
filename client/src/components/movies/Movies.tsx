import * as React from "react";
import { isNil, isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { Layout, LeftColumn, RightColumn, Content } from "./styled";
import MoviesList from "./components/movieList";
import MovieSearchBar from "./components/movieSearchBar";
import MoviePager from "./components/moviePager";
import MovieInfo from "./components/movieInfo";
import { IState } from "./types";
import { movieIdSelector } from "./selectors";

interface IMovies {
  defaultMovieTitle?: string;
  defaultPage?: number;
}

const Movies: React.FC<IMovies> = props => {
  const selectedId = useSelector((state: IState) => movieIdSelector(state));
  const hasMovieSelected = !isNil(selectedId) && !isEmpty(selectedId);

  return (
    <Layout>
      <LeftColumn hasMovieSelected={hasMovieSelected}>
        <MovieSearchBar></MovieSearchBar>
        <Content>
          <MoviesList {...props} />
        </Content>
        <MoviePager />
      </LeftColumn>
      <RightColumn hasMovieSelected={hasMovieSelected}>
        {hasMovieSelected && <MovieInfo></MovieInfo>}
      </RightColumn>
    </Layout>
  );
};

export default Movies;
