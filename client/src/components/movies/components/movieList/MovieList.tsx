import React from "react";
import gql from "graphql-tag";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import uniqBy from "lodash/uniqBy";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { movieFragment } from "../../fragments";
import { Layout } from "./styled";
import { makeMovieTitlePageSelector } from "../../selectors";
import { IState, IMovieData } from "../../types";
import { setMovieTotalResults } from "../../actions";
import MovieItem from "../movieItem";

export const GET_MOVIES_QUERY = gql`
  query movies($page: Int, $title: String) {
    movies(page: $page, title: $title) {
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
  const dispatch = useDispatch();
  const movieTitlePageSelector = React.useMemo(makeMovieTitlePageSelector, []);
  const { title, page } = useSelector((state: IState) =>
    movieTitlePageSelector(state)
  );
  console.log("title defaultTitle", title, defaultMovieTitle);
  console.log("page defaultPage", page, defaultPage);
  const { loading, error, data } = useQuery(GET_MOVIES_QUERY, {
    variables: {
      title: isEmpty(title) ? defaultMovieTitle : title,
      page: page
    }
  });
  const movies = get(data, "movies.Search", []);

  if (loading || error || isEmpty(movies)) {
    dispatch(setMovieTotalResults(0));
    return null;
  }

  // @ts-ignore
  const duplicateFreeMovies = uniqBy(movies, "imdbID") as IMovieData[];

  dispatch(setMovieTotalResults(Number(get(data, "movies.totalResults", 0))));

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
