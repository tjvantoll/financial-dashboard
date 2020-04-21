import React from "react";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartTooltip
} from "@progress/kendo-react-charts";

import { getFundAllocation } from "../services/dataService";
import Loading from "../layout/Loading";

const labelContent = (e) => (`${e.value}%`);

const renderTooltip = (e) => {
  return <div>{e.point ? e.point.category : ""}</div>;
};

export default function Allocation() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    getFundAllocation().then((data) => {
      setData(data);
    })
  }, []);

  return (
    <>
      {!data && <Loading />}
      <Chart style={{ opacity: data ? "1" : "0" }}>
        <ChartTitle text={"Asset Allocation"}></ChartTitle>
        <ChartSeries>
          <ChartSeriesItem type="donut" data={data}>
            <ChartSeriesLabels content={labelContent} background="none" color="#fff" />
          </ChartSeriesItem>
        </ChartSeries>
        <ChartLegend position={"bottom"} visible={true} />
        <ChartTooltip render={renderTooltip} />
      </Chart>
    </>
  )
}
