import React from "react";
import debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";
import {
  moviePageNumSelector,
  movieTotalResultsSelector
} from "../../selectors";
import { IState } from "../../types";
import {
  Container,
  Pager,
  ForwardArrow,
  BackwardArrow,
  PageNum,
  TotalResults
} from "./styled";
import { setMoviesPageNumber } from "../../actions";

interface IMoviePager {}

const MoviePager: React.FC<IMoviePager> = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: IState) => moviePageNumSelector(state));
  const totalResults = useSelector((state: IState) =>
    movieTotalResultsSelector(state)
  );
  const forwardClickHandler = debounce(
    () =>
      page < totalResults ? dispatch(setMoviesPageNumber(page + 1)) : null,
    500
  );
  const backwardClickHandler = debounce(
    () => (page > 1 ? dispatch(setMoviesPageNumber(page - 1)) : null),
    500
  );

  return (
    <Container>
      <Pager>
        <BackwardArrow onClick={backwardClickHandler}></BackwardArrow>
        <PageNum>Page {page}</PageNum>
        <ForwardArrow onClick={forwardClickHandler}></ForwardArrow>
      </Pager>
      <TotalResults>{totalResults} results</TotalResults>
    </Container>
  );
};

export default MoviePager;
