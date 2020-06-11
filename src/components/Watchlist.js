import React from "react";

import styled from "styled-components";

const Background = styled.section`
  width: 100%;
  height: 100vh;
  z-index: -100;
  background: black;
`;

const Header = styled.p`
  margin-top: 0px;
  padding-top: 50px;
  font-family: "PT Sans", serif;
  color: white;
  text-align: left;
  font-size: 3rem;
  padding-left: 50px;
`;

const Content = styled.div`
  font-family: "PT Sans", serif;
  color: white;
  text-align: left;
  font-size: 1rem;
  padding-left: 50px;
`;

//Site's watchlist page, basic text header and each watchlist item loaded from API with da elete button next to each
const Watchlist = () => {
  return (
    <Background>
      <Header>My Watchlist</Header>
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

export default Watchlist;
