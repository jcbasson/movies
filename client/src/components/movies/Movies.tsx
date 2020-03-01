import * as React from "react";
import gql from "graphql-tag";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { movieFragment } from "./fragments";
import { makeMovieTitlePageSelector } from "./selectors";
import { IState } from "./types";
import { Layout, LeftColumn, RightColumn } from "./styled";
import MoviesList from "./components/movieList";
import MovieSearchBar from "./components/movieSearchBar";

export const GET_MOVIES_QUERY = gql`
  query movies($title: String, $page: Int) {
    movies(title: $title, page: $page) {
      Search {
        ...Movie
      }
      totalResults
      Response
    }
  }
  ${movieFragment.movie}
`;

interface IMovies {
  defaultMovieTitle?: string;
  defaultPage?: number;
}

const Movies: React.FC<IMovies> = ({ defaultMovieTitle, defaultPage }) => {
  const movieTitlePageSelector = React.useMemo(makeMovieTitlePageSelector, []);
  const { title, page } = useSelector((state: IState) =>
    movieTitlePageSelector(state)
  );

  const { loading, error, data } = useQuery(GET_MOVIES_QUERY, {
    variables: {
      title: isEmpty(title) ? defaultMovieTitle : title,
      page: isEmpty(page) ? defaultPage : page
    }
  });

  //TODO: Implement proper placeholder to display while waiting for data
  if (loading) return null;
  //TODO: Implement proper error component
  if (error) return <h2>Error!</h2>;

  const movies = get(data, "movies.Search", []);

  return (
    <Layout>
      <LeftColumn>
        <MovieSearchBar></MovieSearchBar>
        <MoviesList movies={movies} />
      </LeftColumn>
      <RightColumn></RightColumn>
    </Layout>
  );
};

export default Movies;
