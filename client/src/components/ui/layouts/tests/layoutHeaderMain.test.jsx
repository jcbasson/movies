import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LayoutHeaderMain from "../layoutHeaderMain";
import MockTheme from "../../../themes/mockTheme";

describe("components/layouts/layoutHeaderMain", () => {
  it("should display a header placeholder", () => {
    const { container } = render(
      <Router>
        <MockTheme>
          <LayoutHeaderMain />
        </MockTheme>
      </Router>
    );
    const header = container.querySelector("header");
    expect(header).toBeTruthy();
  });

  it("should display a main content placeholder", () => {
    const { container } = render(
      <Router>
        <MockTheme>
          <LayoutHeaderMain />
        </MockTheme>
      </Router>
    );
    const main = container.querySelector("main");
    expect(main).toBeTruthy();
  });
});
