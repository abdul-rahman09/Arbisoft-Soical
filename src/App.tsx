import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { AppRouter } from "routes";
import "./App.css";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <AppRouter />
    </Router>
  );
};

export default App;
