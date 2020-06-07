import React from "react";

import styled from "styled-components";

const Background = styled.section`
  width: 100%;
  height: 91vh;
  z-index: -100;
  background: black;
`;

const Header = styled.p`
  margin-top: 0px;
  padding-top: 20%;
  font-family: "PT Sans", serif;
  color: white;
  text-align: center;
  font-size: 3rem;
`;

//Site's homepage, basic text description of StockList
const Loading = () => {
  return (
    <Background>
      <Header>Loading...</Header>
    </Background>
  );
};

export default Loading;
