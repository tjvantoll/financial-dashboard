import React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartTooltip
} from "@progress/kendo-react-charts";

import { getPerformance } from "../services/dataService";
import Loading from "../layout/Loading";

const renderTooltip = (e) => {
  return (
    <div>
      {e.point ?
        "$" + e.point.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : ""}
    </div>
  );
};

export default function Performance() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    getPerformance().then(results => {
      setData(results);
    })
  }, []);

  return (
    <>
      {!data && <Loading />}
      <Chart style={{ opacity: data ? "1" : "0" }}>
        <ChartTitle text="Fund Performance" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={["2014", "2015", "2016", "2017", "2018", "2019", "2020"]} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="line" data={data} />
        </ChartSeries>
        <ChartTooltip render={renderTooltip} />
      </Chart>
    </>
  )
}
