import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import * as data from "../../data/search.json";

const Dropdown = styled.div`
  position: absolute;
  border: 1px solid white;
  width: 200px;
  background-color: white;
  display: block;
  margin-top: -10px;
  margin-left: 41%;
  z-index: 1000;
  a:hover,
  a:active,
  a:link,
  a:visited {
    text-decoration: none !important;
  }
`;

const DropdownResult = styled.p`
  font-family: "PT Sans", serif;
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
  padding-left: 5%;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  font-family: "PT Sans", serif;
  padding: 5px 10px;
  color: black;
  background: white;
  border-color: black;
  border-radius: 3px;
  float: right;
  margin-top: 10px;
  margin-right: 25%;
  @media only screen and (max-width: 800px) {
    margin-right: 1%;
  }
`;

//Our search bar for navigation, includes autocomplete while typing with data of all company names and tickers in database
const NavigationSearchInput = () => {
  //Variable for current query
  const [query, setQuery] = useState("");
  //Variable for our results
  const [results, setResults] = useState(["null"]);

  //Update our results whenever our query changes
  useEffect(() => {
    let results = data.default.filter(
      ({ description }) => description.indexOf(query.toUpperCase()) > -1
    );
    setResults(results.slice(0, 10));
  }, [query]);

  //If the query is blank only show the input, update our query as input changes
  if (query === "") {
    return (
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter ticker or company"
        type="text"
      />
    );
  }

  //Otherwise show the dropdown, once a link is clicked we set our query to blank to hide it again
  return (
    <>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter ticker or company"
        type="text"
      />
      <Dropdown>
        {results.map((res, index) => (
          <NavLink
            onClick={() => setQuery("")}
            key={index}
            to={"/stock/" + res.symbol}
          >
            <DropdownResult>
              {res.description} ({res.symbol})
            </DropdownResult>
          </NavLink>
        ))}
      </Dropdown>
    </>
  );
};

export default NavigationSearchInput;
