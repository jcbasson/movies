import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Layout,
  LeftColumn,
  RightColumn,
  MovieTitle,
  MovieYear,
  MovieStar
} from "./styled";
import { setSelectedMovieId } from "../../actions";
import startIcon from "./starIcon.svg";
import { IState } from "../../types";
import { movieIdSelector } from "../../selectors";

interface IMovieItem {
  imdbID: string;
  title: string;
  year: string;
}

const MovieItem: React.FC<IMovieItem> = ({ imdbID, title, year }) => {
  const selectedId = useSelector((state: IState) => movieIdSelector(state));
  const dispatch = useDispatch();
  const clickHandler = React.useCallback(
    () => dispatch(setSelectedMovieId(imdbID)),
    []
  );
  return (
    <Layout onClick={clickHandler}>
      <LeftColumn>
        <MovieTitle>{title}</MovieTitle>
      </LeftColumn>
      <RightColumn>
        <MovieYear>{year}</MovieYear>
        {imdbID === selectedId && <MovieStar src={startIcon}></MovieStar>}
      </RightColumn>
    </Layout>
  );
};

export default MovieItem;
