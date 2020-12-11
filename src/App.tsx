import React from "react";
import Board from "components/Board";
import { Provider } from "react-redux";
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
