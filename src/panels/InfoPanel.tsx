import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

import { getFundInfo } from "../services/dataService";
import Loading from "../layout/Loading";
import { FundInfo } from "../data/models";

export default function InfoPanel() {
  const [fundInfo, setFundInfo] = React.useState<FundInfo>();
  React.useEffect(() => {
    getFundInfo().then((data: FundInfo) => {
      setFundInfo(data);
    });
  }, []);

  return (
    <>
      {!fundInfo && <Loading />}
      <PanelBar style={{ opacity: fundInfo ? "1" : "0" }}>
        <PanelBarItem expanded={true} title="Fund Managers">
          <div>
            {fundInfo && fundInfo.managers.map((item, idx) => (
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
          {fundInfo && fundInfo.quarters.map((quarter, idx) => (
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
    </>
  );
}
