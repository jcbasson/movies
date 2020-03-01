import React from "react";
import gql from "graphql-tag";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import uniqBy from "lodash/uniqBy";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { movieFragment } from "../../fragments";
import { Layout } from "./styled";
import MovieItem from "../movieItem";
import { makeMovieTitlePageSelector } from "../../selectors";
import { IState, IMovieData } from "../../types";

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

interface IMovieList {
  defaultMovieTitle?: string;
  defaultPage?: number;
}

const MovieList: React.FC<IMovieList> = ({
  defaultMovieTitle,
  defaultPage
}) => {
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
  const movies = get(data, "movies.Search", []);

  if (loading || error || isEmpty(movies)) return null;

  // @ts-ignore
  const duplicateFreeMovies = uniqBy(movies, "imdbID") as IMovieData[];

  return (
    <Layout>
      {duplicateFreeMovies.map((movie: IMovieData) => (
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
