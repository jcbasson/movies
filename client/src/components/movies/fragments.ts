import gql from "graphql-tag";

export const movieFragment = {
  movie: gql`
    fragment Movie on Movie {
      imdbID
      Title
      Year
      Runtime
      Genre
      Director
      Actors
      Plot
      Language
      Poster
    }
  `
};
