import React from "react";
import { useLQIPImage } from "../../../../hooks/imageHooks";
import { MoviePosterImg } from "./styled";

interface IMoviePoster {
  url: string;
}
const MoviePoster: React.FC<IMoviePoster> = ({ url }) => {
  // TODO: Create a low quality version of the image
  const [src] = useLQIPImage(url, url);
  return (
    <>
      <MoviePosterImg src={src} alt="Poster"></MoviePosterImg>
    </>
  );
};

export default MoviePoster;
