import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Root from "./root";
import { Provider } from "react-redux";
import { InMemoryCache } from "apollo-cache-inmemory";
import store from "./store";
import "./reset.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: errors => {
    /*TODO: Do logging of different error types*/
    console.log(errors);
  },
  cache: new InMemoryCache({
    dataIdFromObject: object => object.imdbID
  })
});

const MoviesApp = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Root />
      </Provider>
    </ApolloProvider>
  );
};
ReactDOM.render(<MoviesApp />, document.getElementById("root"));
