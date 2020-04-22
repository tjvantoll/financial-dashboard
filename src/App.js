import React from "react";
import "hammerjs";

import DrawerContainer from "./layout/DrawerContainer";
import Dashboard from "./Dashboard";

import "./App.scss";

function App() {
  return (
    <DrawerContainer>
      <div className="page-container">
        <Dashboard />
      </div>
    </DrawerContainer>
  );
}

export default App;
