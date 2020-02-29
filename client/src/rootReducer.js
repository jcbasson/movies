import { combineReducers } from "redux";
import { moviesReducer } from "./components/movies/reducers";

const reducers = {
  movies: moviesReducer
};
const rootReducer = combineReducers(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootReducer;
