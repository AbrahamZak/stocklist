import React from "react";
import { NavLink } from "react-router-dom"

import styled from "styled-components";

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
`

//Button design for navigation bar, takes in text for button and router directions
const NavigationButton = ({ buttonText }) => {
  return <NavLink to = {"/" + buttonText}><NavButton>{buttonText}</NavButton></NavLink>
};

export default NavigationButton;
