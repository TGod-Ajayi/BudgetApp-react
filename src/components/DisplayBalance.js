import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({ size = "tiny", type, balance, color = "black" }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>
        {type ? "Income" : "Expenses"}
      </Statistic.Label>
      <Statistic.Value>{balance}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
