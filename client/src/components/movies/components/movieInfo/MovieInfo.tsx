import React from "react";
import gql from "graphql-tag";
import get from "lodash/get";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { IState } from "../../types";
import { setSelectedMovieId } from "../../actions";
import { movieIdSelector } from "../../selectors";
import {
  Layout,
  LeftColumn,
  RightColumn,
  MovieTitle,
  MovieGenres,
  MoviePlot,
  MovieDetailContainer,
  MovieDetailLabel,
  MovieDetails,
  BackButton
} from "./styled";
import { movieFragment } from "../../fragments";
import MoviePoster from "./MoviePoster";
export const GET_MOVIE_QUERY = gql`
  query movie($id: String) {
    movie(id: $id) {
      ...Movie
    }
  }
  ${movieFragment.movie}
`;

interface IMovieInfo {}

const MovieInfo: React.FC<IMovieInfo> = () => {
  const selectedId = useSelector((state: IState) => movieIdSelector(state));
  const dispatch = useDispatch();
  const clickHandler = React.useCallback(
    () => dispatch(setSelectedMovieId(null)),
    []
  );
  // TODO: Try read from apollo cache
  const { loading, error, data } = useQuery(GET_MOVIE_QUERY, {
    variables: {
      id: selectedId
    }
  });

  if (loading || error || !data || !data.movie) {
    return null;
  }
  const {
    Poster,
    Title,
    Genre,
    Plot,
    Language,
    Director,
    Actors,
    Runtime
  } = get(data, "movie");

  return (
    <Layout>
      <LeftColumn>
        <MovieTitle>{Title}</MovieTitle>
        <MovieGenres>{Genre}</MovieGenres>
        <MoviePlot>{Plot}</MoviePlot>
        <MovieDetails>
          <MovieDetailContainer>
            <MovieDetailLabel>Language:</MovieDetailLabel>
            {Language}
          </MovieDetailContainer>
          <MovieDetailContainer>
            <MovieDetailLabel>Director:</MovieDetailLabel>
            {Director}
          </MovieDetailContainer>
          <MovieDetailContainer>
            <MovieDetailLabel>Actors:</MovieDetailLabel>
            {Actors}
          </MovieDetailContainer>
          <MovieDetailContainer>
            <MovieDetailLabel>Duration:</MovieDetailLabel>
            {Runtime}
          </MovieDetailContainer>
        </MovieDetails>
        <BackButton onClick={clickHandler}>Back</BackButton>
      </LeftColumn>
      <RightColumn>
        <MoviePoster url={Poster} />
      </RightColumn>
    </Layout>
  );
};

export default MovieInfo;
