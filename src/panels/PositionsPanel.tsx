import React from "react";
import { Grid, GridCellProps, GridColumn } from "@progress/kendo-react-grid";
import { getPositions } from "../services/dataService";
import { Position } from "../data/models";

export default function PositionsPanel() {
  const [positions, setPositions] = React.useState<Position[]>();
  React.useEffect(() => {
    getPositions().then((data: Position[]) => {
      setPositions(data);
    });
  }, []);

  return (
    <h2>Positions Panel</h2>
  );
}
