import React from "react";
import Loadable from "react-loadable";
import Loader from "./components/loader";

//TODO: Implement fail safe in case vehicles.json does not exist
const LoadableMovies = Loadable.Map({
  loader: {
    Movies: () =>
      import(/* webpackChunkName: "movies" */ `./components/movies`),
    config: () =>
      import(
        /* webpackChunkName: "moviesConfig" */ `./components/movies/config.json`
      )
  },
  loading: Loader,
  delay: 300,
  render(loaded) {
    const Movies = loaded.Movies.default;
    const props = loaded.config;
    return <Movies {...props} />;
  }
});

export const getRoutes = () => [
  {
    path: "/movies",
    component: LoadableMovies,
    exact: true
  }
];
