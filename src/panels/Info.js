import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

import { getFundInfo } from "../services/dataService";
import Loading from "../layout/Loading";

export default function Info() {
  const [fundInfo, setFundInfo] = React.useState();
  React.useEffect(() => {
    getFundInfo().then((data) => {
      setFundInfo(data);
    });
  }, []);

  return (
    <>
      {!fundInfo && <Loading />}
      {fundInfo &&
        <PanelBar >
          <PanelBarItem expanded={true} title="Fund Managers">
            <div>
              {fundInfo.managers && fundInfo.managers.map((item, idx) => (
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
            {fundInfo.quarters && fundInfo.quarters.map((quarter, idx) => (
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
      }
    </>
  );
}
