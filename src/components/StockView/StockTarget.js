import React from "react";

import styled from "styled-components";

const TitleLabel = styled.p`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  margin-bottom: 0;
  font-size: 3rem;
  font-weight: bold;
`;

const BodyText = styled.div`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  font-size: 1rem;
`;

//Target prices from API
const StockTarget = ({ targetHigh, targetLow, targetAvg }) => {

  return (
    <>
      <TitleLabel>Price Targets:</TitleLabel>
      <BodyText>
        <p>Target High: ${targetHigh}</p>
        <p>Target Avg: ${targetAvg}</p>
        <p>Target Low: ${targetLow}</p>
      </BodyText>
    </>
  );
};

export default StockTarget;
