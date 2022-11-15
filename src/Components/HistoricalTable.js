import React from "react";

const HistoricalTable = (props) => {
  const historicalArray = props.historicalData;

  console.log(historicalArray);

  return (
    <div>
      <h3 className="text-center"> Historical value Of USD</h3>
      <div className="grid-container">
        <ul>
          <li>last Day</li>
          <li>last Month</li>
          <li>last Year</li>
        </ul>
        <ul>
          <li>12</li>
          <li>11</li>
          <li>6</li>
        </ul>
      </div>
    </div>
  );
};

export default HistoricalTable;
