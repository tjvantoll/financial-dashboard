import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { getFundInfo } from "../services/dataService";
import { FundInfo } from "../data/models";

export default function InfoPanel() {
  const [fundInfo, setFundInfo] = React.useState<FundInfo>();
  React.useEffect(() => {
    getFundInfo().then((data: FundInfo) => {
      setFundInfo(data);
    });
  }, []);

  return (
    <h2>Info Panel</h2>
  );
}
