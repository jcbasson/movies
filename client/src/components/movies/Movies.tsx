import * as React from "react";
import { isNil, isEmpty } from "lodash";
import { useSelector } from "react-redux";
import Loadable from "react-loadable";
import { Layout, LeftColumn, RightColumn, Content } from "./styled";
import MoviesList from "./components/movieList";
import MovieSearchBar from "./components/movieSearchBar";
import MoviePager from "./components/moviePager";
import Loader from "../loader";
import { IState } from "./types";
import { movieIdSelector } from "./selectors";
import { IMovieInfo } from "../movies/components/movieInfo/MovieInfo";

interface IMovies {
  defaultMovieTitle?: string;
  defaultPage?: number;
}

// TODO: find the types for this
const LoadableMovieInfo = Loadable({
  loader: () =>
    import(/* webpackChunkName: "MovieInfo" */ `./components/movieInfo`),
  loading: Loader
});

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
        {hasMovieSelected && <LoadableMovieInfo></LoadableMovieInfo>}
      </RightColumn>
    </Layout>
  );
};

export default Movies;
