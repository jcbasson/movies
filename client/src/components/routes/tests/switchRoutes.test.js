import React from "react";
import { render } from "@testing-library/react";
import SwitchRoutes from "../switchRoutes";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("components/routes/SwitchRoutes", () => {
  const MoviesComponent = () => {
    return (
      <>
        <span>Movies</span>
      </>
    );
  };
  const setup = (propOverrides = {}) => {
    const props = {
      routes: [
        {
          path: "/movies",
          component: MoviesComponent
        }
      ],
      ...propOverrides
    };

    return {
      props
    };
  };

  it("it should display movies when navigating to movies page", () => {
    const { props } = setup();
    const history = createMemoryHistory();
    history.push("/movies");
    const { container } = render(
      <Router history={history}>
        <SwitchRoutes {...props} />
      </Router>
    );

    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.innerHTML).toMatch("Movies");
  });
});
