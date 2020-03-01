import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Layout,
  LayoutHeader,
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
    [dispatch]
  );
  return (
    <Layout onClick={clickHandler}>
      <LayoutHeader>
        <MovieTitle>{title}</MovieTitle>
        {imdbID === selectedId && <MovieStar src={startIcon}></MovieStar>}
      </LayoutHeader>
      <MovieYear>{year}</MovieYear>
    </Layout>
  );
};

export default MovieItem;
