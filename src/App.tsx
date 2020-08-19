import React, { Suspense } from "react";
import "hammerjs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import DrawerRouterContainer from "./layout/DrawerRouterContainer";

import Loading from "./layout/Loading";
const Home = React.lazy(() => import ("./Home"));
const Dashboard = React.lazy(() => import ("./Dashboard"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
