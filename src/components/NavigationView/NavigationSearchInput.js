import React from "react";

import styled from "styled-components";

const Input = styled.input`
  font-family: "PT Sans", serif;
  padding: 5px 10px;
  color: black;
  background: white;
  border-color: black;
  border-radius: 3px;
  float: right;
  margin-top: -2px;
  margin-right: 25%;
  @media only screen and (max-width: 800px) {
    margin-right: 1%;
  }
`;

//Our search bar for navigation, includes autocomplete while typing with data of all company names and tickers in database
const NavigationSearchInput = () => {
  return <Input placeholder="Enter ticker or company" type="text" />;
};

export default NavigationSearchInput;
