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
  padding-top: 10%;
  font-family: "PT Sans", serif;
  color: white;
  text-align: center;
  font-size: 3rem;
`;

const Content = styled.div`
  font-family: "PT Sans", serif;
  color: white;
  text-align: center;
  font-size: 1rem;
`;

//Site's homepage, basic text description of StockList
const Home = () => {
  return (
    <Background>
      <Header>Welcome to StockList</Header>
      <Content>
        <p>
          Use the search bar above to find information about your favorite
          stocks.
        </p>
        <p>Create an account to add stocks to your watchlist.</p>
        <p>
          Keep track of earnings, company info, recommendations, price targets,
          technical indicator sentiment, and view related companies
        </p>
        <p>
          Also follow company news, buzz scores, news sentiment, and sector news
          sentiment
        </p>
      </Content>
    </Background>
  );
};

export default Home;
