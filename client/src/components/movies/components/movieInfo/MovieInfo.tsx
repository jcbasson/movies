import React from "react";
import { Layout, LeftColumn, RightColumn } from "./styled";

interface IMovieInfo {}

const MovieInfo: React.FC<IMovieInfo> = () => {
  return (
    <Layout>
      <LeftColumn></LeftColumn>
      <RightColumn></RightColumn>
    </Layout>
  );
};

export default MovieInfo;
