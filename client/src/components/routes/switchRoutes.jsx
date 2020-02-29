import React from "react";
import { Switch, Route } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";

const SwitchRoutes = ({ routes = [] }) => {
  return (
    <Switch>
      {!isEmpty(routes) &&
        routes.map(({ path, component, exact }) => {
          return (
            <Route
              key={path}
              exact={isNil(exact) ? false : exact}
              path={path}
              component={component}
            />
          );
        })}
    </Switch>
  );
};

export default SwitchRoutes;
