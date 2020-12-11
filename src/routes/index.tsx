import React, { Suspense, FunctionComponent } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Board from "components/Board";
import LoginPage from "components/LoginPage";

export const RoutesHOC = (defaultPath: any) => {
  const Routes: FunctionComponent<any> = (props: any) => (
    <Suspense fallback={<>Abc</>}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={LoginPage} />
          <Route exact path={"/posts"} component={Board} />
          <Route exact path={"/login"} component={Board} />
          <Redirect to={defaultPath} />
        </Switch>
      </Router>
    </Suspense>
  );
  return Routes;
};

export const DEFAULT_PATH = "/login";
export const USER_LANDING_PAGE = "/login";

export const AppRouter = RoutesHOC("/login");
