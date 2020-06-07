import React from "react";
import { NavLink } from "react-router-dom"

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
  display: inline-block;
  font-family: "PT Sans", serif;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 0px;
  padding-top: 15px;

  a{
    color: black;
    text-decoration: none;
  }
`;

//This is the site's navigation bar which includes the title, the search bar, and log/signup buttons
const Navigation = () => {
  return (
    <Background>
      <Title><NavLink to = "/">StockList</NavLink></Title>
        <NavigationButton buttonText={"Login"} />
        <NavigationButton buttonText={"Signup"} />
        <NavigationSearchInput />
    </Background>
  );
};

export default Navigation;
