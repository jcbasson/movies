import React from "react";
import { getRoutes } from "./routeConfig";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRoutes from "./components/routes/switchRoutes";
import YingYangTheme from "./themes/yingyangTheme";

const Root = () => (
  <Router>
    <YingYangTheme>
      <SwitchRoutes routes={getRoutes()} />
    </YingYangTheme>
  </Router>
);

export default Root;
