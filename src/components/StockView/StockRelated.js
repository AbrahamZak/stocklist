import React from "react";
import { NavLink } from "react-router-dom"

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

const CommaList = styled.ul`
  margin-left: 2.5%;
  display: inline;
  list-style: none;
  padding: 0px;

  a {
    text-decoration: none;
  }
  
  a:link, a:visited {
    color: white;
  }
  
  a:hover {
    font-weight: bold;
  }

  li {
    font-size: 1rem;
    font-family: "PT Sans", serif;
    display: inline;
  }

  li::after {
    content: ",\\00A0";
  }

  li:last-child::after {
    content: "";
  }
`;

//Displays related stocks to currently selected ticker
const StockRelated = ({ related }) => {
  return (
    <>
      <TitleLabel>Related Companies:</TitleLabel>
      <CommaList>
        {related.map((company, index) => (
          <li key={index}><NavLink to = {"/stock/" + company}>{company}</NavLink></li>
        ))}
      </CommaList>
    </>
  );
};

export default StockRelated;
