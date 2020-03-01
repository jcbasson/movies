import * as React from "react";
import gql from "graphql-tag";
import get from "lodash/get";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { movieFragment } from "./fragments";
import { makeMovieTitlePageSelector } from "./selectors";
import { IState } from "./types";
import { Layout, LeftColumn, RightColumn } from "./styled";
import MoviesList from "./components/movieList";

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

interface IMovies {}

const Movies: React.FC<IMovies> = () => {
  const movieTitlePageSelector = React.useMemo(makeMovieTitlePageSelector, []);
  const { title, page } = useSelector((state: IState) =>
    movieTitlePageSelector(state)
  );

  const { loading, error, data } = useQuery(GET_MOVIES_QUERY, {
    variables: { title, page }
  });

  //TODO: Implement proper placeholder to display while waiting for data
  if (loading) return null;
  //TODO: Implement proper error component
  if (error) return <h2>Error!</h2>;

  const movies = get(data, "movies.Search", []);

  return (
    <Layout>
      <LeftColumn>
        <MoviesList movies={movies} />
      </LeftColumn>
      <RightColumn></RightColumn>
    </Layout>
  );
};

export default Movies;
