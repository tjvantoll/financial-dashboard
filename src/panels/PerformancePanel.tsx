import React from "react";

import { getPerformance } from "../services/dataService";
import Loading from "../layout/Loading";

export default function PerformancePanel() {
  const [data, setData] = React.useState<string[]>();
  React.useEffect(() => {
    getPerformance().then((results: string[]) => {
      setData(results);
    })
  }, []);

  return (
    <>
      {!data && <Loading />}
    </>
  )
}
