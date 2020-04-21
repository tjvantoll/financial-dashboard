import React from "react";

import Info from "./panels/Info";
import Allocation from "./panels/Allocation";
import Performance from "./panels/Performance";
import Positions from "./panels/Positions";

export default function Dashboard() {
  return (
    <div className="panels">
      <div className="panel-info">
        <Info />
      </div>
      <div className="panel-allocation">
        <Allocation />
      </div>
      <div className="panel-balance">
        <Performance />
      </div>
      <div className="panel-positions">
        <Positions />
      </div>
    </div>
  )
}
