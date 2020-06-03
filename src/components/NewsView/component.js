import React from "react";

import styled from "styled-components";

import NewsCompany from "./NewsCompany";
import NewsSentiment from "./NewsSentiment";
import NewsBuzz from "./NewsBuzz";

const WrapLeft = styled.div`
  float: left;
  width: 50%;
`;

const WrapRight = styled.div`
  float: right;
  width: 50%;
`;

const Background = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: black;
  min-height: 100vh;
  color: white;
`;

//NewsView component, the main component for the news side of the StockEngine
const NewsView = ({ companyNews, newsSentiment, newsBuzz }) => {
  return (
    <Background>
      <WrapLeft>
        <NewsCompany companyNews={companyNews} />
      </WrapLeft>
      <WrapRight>
        <NewsBuzz
          articlesInLastWeek={newsBuzz.articlesInLastWeek}
          weeklyAverage={newsBuzz.weeklyAverage}
          buzzScore={(newsBuzz.buzzScore * 100).toFixed(2)}
        />
        <NewsSentiment
          ticker={newsSentiment.ticker}
          companyNewsScore={(newsSentiment.companyNewsScore * 100).toFixed(2)}
          sectorAverageNewsScore={(
            newsSentiment.sectorAverageNewsScore * 100
          ).toFixed(2)}
          bullishPercent={(newsSentiment.bullishPercent * 100).toFixed(2)}
          sectorAverageBullishPercent={(
            newsSentiment.sectorAverageBullishPercent * 100
          ).toFixed(2)}
          bearishPercent={(newsSentiment.bearishPercent * 100).toFixed(2)}
          sectorAverageBearishPercent={(
            newsSentiment.sectorAverageBearishPercent * 100
          ).toFixed(2)}
        />
      </WrapRight>
    </Background>
  );
};

export default NewsView;
