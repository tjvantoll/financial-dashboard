import React from "react";
import "hammerjs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DrawerRouterContainer from "./layout/DrawerRouterContainer";
import Dashboard from "./Dashboard";
import Home from "./Home";

import "./App.scss";

function App() {
  return (
    <Router>
      <DrawerRouterContainer>
        <div className="page-container">
          <Switch>
            <Route path="/tech-fund">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </DrawerRouterContainer>
    </Router>
  );
}

export default App;
