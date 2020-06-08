import React from "react";

import styled from "styled-components";

const InfoLabelLeft = styled.div`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  font-size: 1rem;
  float: left;
  width: 45%;
`;

const InfoLabelRight = styled.div`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  font-size: 1rem;
  float: right;
  width: 45%;
`;

//Daily stock information
const StockDaily = ({ todayHigh, todayLow, openPrice, prevClose }) => {

  return (
    <>
      <InfoLabelLeft>
        <p>Today's High: ${todayHigh}</p>
        <p>Today's Low: ${todayLow}</p>
      </InfoLabelLeft>
      <InfoLabelRight>
        <p>Open: ${openPrice}</p>
        <p>Previous Close: ${prevClose}</p>
      </InfoLabelRight>
    </>
  );
};

export default StockDaily;
