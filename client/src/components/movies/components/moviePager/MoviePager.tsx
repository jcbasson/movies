import React from "react";
import gql from "graphql-tag";
import { useDispatch, useSelector } from "react-redux";
import {
  moviePageNumSelector,
  movieTotalResultsSelector
} from "../../selectors";
import { IState } from "../../types";
import { Container } from "./styled";

interface IMoviePager {}

const MoviePager: React.FC<IMoviePager> = () => {
  const page = useSelector((state: IState) => moviePageNumSelector(state));
  const totalResults = useSelector((state: IState) =>
    movieTotalResultsSelector(state)
  );
  return (
    <Container>
      <h1>{page}</h1>
      <h1>{totalResults}</h1>
    </Container>
  );
};

export default MoviePager;
