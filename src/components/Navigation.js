import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import NavigationButton from "./NavigationView/NavigationButton";
import NavigationSearchInput from "./NavigationView/NavigationSearchInput";

import authService from "../services/auth.service";

const Background = styled.div`
  width: 100%;
  height: 57px;
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

  a {
    color: black;
    text-decoration: none;
  }
`;

const NavButton = styled.button`
  font-family: "PT Sans", serif;
  background-color: white;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  color: black;
  padding: 5px 25px;
  margin-right: 1%;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;
  float: right;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

//This is the site's navigation bar which includes the title, the search bar, and log/signup/signout,watchlist buttons
const Navigation = ({ loggedIn, setLoggedIn }) => {
  //Logout button
  const handleLogout = (event) => {
    event.preventDefault();
    authService.logout().then(
      () => {
        console.log("Success");
        setLoggedIn(false);
      },
      (error) => {
        console.log("Logout error!");
      }
    );
  };

  if (loggedIn) {
    return (
      <Background>
        <Title>
          <NavLink to="/">StockList</NavLink>
        </Title>
        <NavButton onClick={(e) => handleLogout(e)} buttonText={"Logout"}>
          Logout
        </NavButton>
        <NavigationButton buttonText={"Watchlist"} />
        <NavigationSearchInput />
      </Background>
    );
  } else {
    return (
      <Background>
        <Title>
          <NavLink to="/">StockList</NavLink>
        </Title>
        <NavigationButton buttonText={"Login"} />
        <NavigationButton buttonText={"Signup"} />
        <NavigationSearchInput />
      </Background>
    );
  }
};

export default Navigation;
