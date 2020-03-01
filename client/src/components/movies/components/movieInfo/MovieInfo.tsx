import React from "react";
import gql from "graphql-tag";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { IState } from "../../types";
import { setSelectedMovieId } from "../../actions";
import { movieIdSelector } from "../../selectors";
import { Layout, LeftColumn, RightColumn } from "./styled";
import { movieFragment } from "../../fragments";

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
  console.log("data = ", data);
  if (loading || error) {
    return null;
  }

  return (
    <Layout>
      <LeftColumn></LeftColumn>
      <RightColumn></RightColumn>
    </Layout>
  );
};

export default MovieInfo;
