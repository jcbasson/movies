import React from "react";

const Loader = props => {
  if (props.error) {
    return <div>Oh no, something went wrong!</div>;
  } else if (props.delay) {
    return <h2>Loading...</h2>;
  } else {
    return null;
  }
};

export default Loader;
