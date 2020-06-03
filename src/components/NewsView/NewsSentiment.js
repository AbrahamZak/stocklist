import React from "react";

import styled from "styled-components";

const TitleLabel = styled.p`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  margin-bottom: 0;
  font-size: 3rem;
  font-weight: bold;
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

//News Sentiment component
const NewsSentiment = ({
  ticker,
  companyNewsScore,
  sectorAverageNewsScore,
  bullishPercent,
  sectorAverageBullishPercent,
  bearishPercent,
  sectorAverageBearishPercent,
}) => {
  return (
    <>
      <TitleLabel>Sentiment Scores:</TitleLabel>
      <InfoLabelLeft>
        <p>
          {ticker} News Score: {companyNewsScore}%
        </p>
        <p>
          {ticker} Bullish Score: {bullishPercent}%
        </p>
        <p>
          {ticker} Bearish Score: {bearishPercent}%
        </p>
      </InfoLabelLeft>
      <InfoLabelRight>
        <p>Sector Average Score: {sectorAverageNewsScore}%</p>
        <p>Sector Average Bull Score: {sectorAverageBullishPercent}%</p>
        <p>Sector Average Bear Score: {sectorAverageBearishPercent}%</p>
      </InfoLabelRight>
    </>
  );
};

export default NewsSentiment;
