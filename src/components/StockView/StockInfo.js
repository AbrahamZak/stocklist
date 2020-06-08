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
  a {
    color: white;
  }
`;

//Company info for StockView
const StockInfo = ({ industry, marketCap, ipoDate, companyURL }) => {

  return (
    <>
      <TitleLabel>Company Info:</TitleLabel>
      <BodyText>
        <p>Industry: {industry}</p>
        <p>Market Cap: ${marketCap}</p>
        <p>IPO Date: {ipoDate}</p>
        <p>
          Company Website:{" "}
          <a rel="noopener noreferrer" target="_blank" href={companyURL}>
            {companyURL}
          </a>
        </p>
      </BodyText>
    </>
  );
};

export default StockInfo;
