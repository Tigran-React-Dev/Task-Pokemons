import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./../routes";

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ id, path, component, exect }) => {
        return (
          <Route path={path} component={component} key={id} exact={exect} />
        );
      })}
    </Switch>
  );
};

export default Routes;
