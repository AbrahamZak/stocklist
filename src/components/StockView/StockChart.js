import React from "react";

import styled from "styled-components";

const Chart = styled.div`
  background-color: black;
  margin-left: 2.5%;
  height: 50vh;
`;

//The Stock Chart is created by taking the daily candlesticks from the API and deriving a chart from it
const StockChart = () => {
  return <Chart>Stock Chart</Chart>;
};

export default StockChart;
