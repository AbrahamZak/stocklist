import React from "react";

import styled from "styled-components";

const PriceLabel = styled.p`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  margin-top: 0;
  font-size: 2rem;
  color: ${(props) => props.changeColor};
`;

//Stock price and daily change
const StockPrice = ({ price, change }) => {
  //Adjust today's price based on whether daily is up or down
  let changeColor = null;
  if (change >= 0) {
    changeColor = "lightgreen";
  } else {
    changeColor = "#ff644d";
  }

  //Add a sign to positive changes
  let sign = null;
  if (change >= 0) {
    sign = "+";
  }

  return (
    <PriceLabel changeColor={changeColor}>
      ${price} ({sign}{change}%)
    </PriceLabel>
  );
};

export default StockPrice;
