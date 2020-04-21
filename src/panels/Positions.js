import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

import { getPositions } from "../services/dataService";
import Loading from "../layout/Loading";

const NumberCell = (props) => {
  const startingValue = props.dataItem[props.field];
  let finalValue;

  if (startingValue > 1000000) {
    finalValue = (startingValue / 1000000).toFixed(2) + "M";
  }
  if (startingValue > 1000000000) {
    finalValue = (startingValue / 1000000000).toFixed(2) + "M";
  }

  return <td>{finalValue}</td>
}

const ChangeCell = (props) => {
  const value = props.dataItem[props.field];
  return (
    <td className={value > 0 ? "change-up" : "change-down"}>
      {value}%
    </td>
  );
}

export default function Positions() {
  const [positions, setPositions] = React.useState();

  React.useEffect(() => {
    getPositions().then((data) => {
      setPositions(data);
    });
  }, []);

  return (
    <>
      {!positions && <Loading />}
      <Grid
        data={positions}
        style={{ height: 700, opacity: positions ? "1" : "0" }}
      >
        <GridColumn title="Symbol" field="symbol" locked={true} width={100} />
        <GridColumn title="Name" field="name" />
        <GridColumn title="Change" field="day_change" cell={ChangeCell} />
        <GridColumn title="% Change" field="change_pct" cell={ChangeCell} />
        <GridColumn title="Volume" field="volume" cell={NumberCell} />
        <GridColumn title="Market Cap" field="market_cap" cell={NumberCell} />
      </Grid>
    </>
  )
}
