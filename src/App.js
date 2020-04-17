import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DrawerContainer from "./layout/DrawerContainer";
import Dashboard from "./Dashboard";

import "@progress/kendo-theme-material/dist/all.css";
import "./App.css";

function App() {
  return (
    <Router>
      <DrawerContainer>
        <div className="page-container">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </DrawerContainer>
    </Router>
  );
}

export default App;
