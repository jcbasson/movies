import React from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import get from "lodash/get";
import { SearchBox, Container } from "./styled";
import { setSearchedMovieTitle } from "../../actions";

interface IMovieSearchBar {}

const MovieSearchBar: React.FC<IMovieSearchBar> = () => {
  const dispatch = useDispatch();
  const searchMovieHandler = debounce(searchText => {
    dispatch(setSearchedMovieTitle(searchText));
  }, 500);
  const onChangeHandler = (event: any) => {
    const movieSearchText = get(event, "target.value", "");
    searchMovieHandler(movieSearchText);
  };

  return (
    <Container>
      <SearchBox
        type="text"
        onChange={onChangeHandler}
        placeholder="Search Movies"
      />
    </Container>
  );
};

export default MovieSearchBar;
