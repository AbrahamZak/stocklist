import React from "react";

import styled from "styled-components";

import NavigationButton from "./NavigationView/NavigationButton";
import NavigationSearchInput from "./NavigationView/NavigationSearchInput";

const Background = styled.div`
  width: 100%;
  height: 9vh;
  z-index: -10;
  background: white;
`;

const Title = styled.p`
  font-family: "PT Sans", serif;
  color: black;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 0px;
  padding-top: 15px;
  cursor: pointer;

`;

//This is the site's navigation bar which includes the title, the search bar, and log/signup buttons
const Navigation = () => {
  return (
    <Background>
      <Title>
      StockList
        <NavigationButton buttonText={"Login"} />
        <NavigationButton buttonText={"Signup"} />
        <NavigationSearchInput />
      </Title>
    </Background>
  );
};

export default Navigation;
