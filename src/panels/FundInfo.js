import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

import { fundData } from "../data/fund";

export default function Team() {
  return (
    <PanelBar >
      <PanelBarItem expanded={true} title="Fund Managers">
        <div>
          {fundData.managers.map((item, idx) => (
            <div className="manager" key={idx}>
              <img src={`/team/${item.firstName}${item.lastName}.png`}
              alt={item.firstName + ' ' + item.lastName} />
              <span className="manager-info">
                <h2>{item.firstName + ' ' + item.lastName}</h2>
                <p>{item.position}</p>
              </span>
            </div>
          ))}
        </div>
      </PanelBarItem>
      <PanelBarItem title={"Fund Details"}>
        {fundData.quarters.map((quarter, idx) => (
          <PanelBarItem title={quarter.title} key={idx}>
              <ul className="fund-detail-list">
                {quarter.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.name}:</span>
                    <span>{detail.value}</span>
                  </li>
                ))}
              </ul>
          </PanelBarItem>
        ))}
      </PanelBarItem >
    </PanelBar>
  )
}
