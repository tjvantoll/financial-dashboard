import React from "react";

import { getPositions } from "../services/dataService";

export default function Positions() {
  const [positions, setPositions] = React.useState([]);

  React.useEffect(() => {
    getPositions().then((results) => {
      setPositions(results.data);
    });
  }, []);

  return (
    <h2>Positions</h2>
  )
}
