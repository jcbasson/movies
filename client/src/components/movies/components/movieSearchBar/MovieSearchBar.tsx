import React from "react";
import { SearchBox, Container } from "./styled";

interface IMovieSearchBar {}

const MovieSearchBar: React.FC<IMovieSearchBar> = () => {
  return (
    <Container>
      <SearchBox type="text" placeholder="Search Movies" />
    </Container>
  );
};

export default MovieSearchBar;
