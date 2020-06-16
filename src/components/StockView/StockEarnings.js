import React from "react";

import styled from "styled-components";

const TitleLabel = styled.p`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  margin-bottom: 0;
  font-size: 3rem;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

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

const BodyText = styled.p`
  margin: 0px;
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  font-size: 1rem;
`;

//Earnings portion of a stock's page
const StockEarnings = ({
  quarter,
  year,
  date,
  epsEstimate,
  epsActual,
  revEstimate,
  revActual,
}) => {

  return (
    <>
      <TitleLabel>
        Latest Earnings (Q{quarter} {year})
      </TitleLabel>
      <BodyText>Date: {date}</BodyText>
      <InfoLabelLeft>
        <p>EPS Estimate: ${epsEstimate}</p>
        <p>Revenue Estimate: ${revEstimate}</p>
      </InfoLabelLeft>
      <InfoLabelRight>
        <p>EPS Actual: ${epsActual}</p>
        <p>Revenue Actual: ${revActual}</p>
      </InfoLabelRight>
    </>
  );
};

export default StockEarnings;
