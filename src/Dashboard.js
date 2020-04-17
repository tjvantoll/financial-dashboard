import React from "react";

import FundInfo from "./panels/FundInfo";
import Allocation from "./panels/Allocation";
import Balance from "./panels/Balance";
import Positions from "./panels/Positions";

export default function Dashboard() {
  return (
    <div className="panels">
      <div className="panel-fundinfo">
        <FundInfo />
      </div>
      <div className="panel-allocation">
        <Allocation />
      </div>
      <div className="panel-balance">
        <Balance />
      </div>
      <div className="panel-positions">
        <Positions />
      </div>
    </div>
  )
}
