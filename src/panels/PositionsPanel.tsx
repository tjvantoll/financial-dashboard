import React from "react";

import { getPositions } from "../services/dataService";
import Loading from "../layout/Loading";
import { Position } from "../data/models";

export default function PositionsPanel() {
  const [positions, setPositions] = React.useState<Position[]>();

  React.useEffect(() => {
    getPositions().then((data: Position[]) => {
      setPositions(data);
    });
  }, []);

  return (
    <>
      {!positions && <Loading />}
    </>
  )
}
