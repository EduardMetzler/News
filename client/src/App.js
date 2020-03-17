import React from "react";

import { Provider } from "react-redux";
import { configureStore } from "./store/store";

import "materialize-css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { useRoutes } from "./routes";
// import { useSelector } from "react-redux";

import "./App.css";

import { Nav } from "./components/Navbar";

// import { logIn2 } from "./page/logIn2.page";
// import { LogInForm2 } from "./components/logInForm2";

const App = () => {
  const routes = useRoutes();

  return (
    // <div>edew</div>
    <Provider store={configureStore()}>
      <Router>
        <Nav></Nav>

        <div>{routes}</div>
      </Router>
    </Provider>
  );
};

export default App;
