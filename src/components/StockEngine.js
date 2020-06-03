import React, { useState, useEffect } from "react";

import styled from "styled-components";

import StockView from "./StockView/component";
import NewsView from "./NewsView/component";

const Wrapper = styled.div`
  position: relative;
`;
const ButtonHolder = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`;
const ButtonGroup = styled.button`
  background-color: white;
  border-style: solid;
  border-color: black;
  font-family: "PT Sans", serif;
  font-size: 1rem;
  padding: 8px 70px;
  cursor: pointer;
  float: left;

  transition-duration: 0.4s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const StockEngine = (props) => {
  let ticker = props.match.params.ticker
  //Variable for current view
  const [isFinancialView, setCurrentView] = useState(true);

  //Functions to switch view when selected in view
  function switchFinancials() {
    setCurrentView(true);
  }
  function switchNews() {
    setCurrentView(false);
  }

  //Get data from API based on ticker and fill our data
  const getStockData = async (ticker) => {
    //Get and store all neccessary API calls in JSON format
    const stockInfo = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockInfoJSON = await stockInfo.json();

    const stockNews = await fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=2020-05-01&to=2020-05-01&token=br8pn77rh5ral083irt0`
    );
    const stockNewsJSON = await stockNews.json();

    const stockSentiment = await fetch(
      `https://finnhub.io/api/v1/news-sentiment?symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockSentimentJSON = await stockSentiment.json();

    const stockRelated = await fetch(
      `https://finnhub.io/api/v1/stock/peers?symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockRelatedJSON = await stockRelated.json();

    const stockRecommendations = await fetch(
      `https://finnhub.io/api/v1/stock/recommendation?symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockRecommendationsJSON = await stockRecommendations.json();

    const stockTarget = await fetch(
      `https://finnhub.io/api/v1/stock/price-target?symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockTargetJSON = await stockTarget.json();

    const stockEarnings = await fetch(
      `https://finnhub.io/api/v1/calendar/earnings?from=2010-01-01&to=2020-05-15&symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockEarningsJSON = await stockEarnings.json();

    const stockDaily = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockDailyJSON = await stockDaily.json();

    const stockCandle = await fetch(
      `https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=1&from=1572651390&to=1572910590&token=br8pn77rh5ral083irt0`
    );
    const stockCandleJSON = await stockCandle.json();

    const stockTechnical = await fetch(
      `https://finnhub.io/api/v1/scan/technical-indicator?symbol=${ticker}&resolution=D&token=br8pn77rh5ral083irt0`
    );
    const stockTechnicalJSON = await stockTechnical.json();

    //Set all information from API call results
    try {
      setBasicInfo({
        name: stockInfoJSON.name,
        ticker: stockInfoJSON.ticker,
        price: stockDailyJSON.c,
        change: (
          ((stockDailyJSON.c - stockDailyJSON.pc) / stockDailyJSON.c) *
          100
        ).toFixed(2),
        todayHigh: stockDailyJSON.h,
        todayLow: stockDailyJSON.l,
        openPrice: stockDailyJSON.o,
        prevClose: stockDailyJSON.pc,
      });
    } catch (err) {
      console.log("Could not set basic info");
    }

    try {
      setEarnings({
        quarter: stockEarningsJSON.earningsCalendar[0].quarter,
        date: stockEarningsJSON.earningsCalendar[0].date,
        year: stockEarningsJSON.earningsCalendar[0].year,
        epsEstimate: stockEarningsJSON.earningsCalendar[0].epsEstimate,
        epsActual: stockEarningsJSON.earningsCalendar[0].epsActual,
        revEstimate: stockEarningsJSON.earningsCalendar[0].revenueEstimate,
        revActual: stockEarningsJSON.earningsCalendar[0].revenueActual,
      });
    } catch (err) {
      console.log("Could not set earnings");
    }

    try {
      setRelated({
        related: stockRelatedJSON,
      });
    } catch (err) {
      console.log("Could not set related");
    }

    try {
      setCompanyInfo({
        industry: stockInfoJSON.finnhubIndustry,
        marketCap: stockInfoJSON.marketCapitalization,
        ipoDate: stockInfoJSON.ipo,
        companyURL: stockInfoJSON.weburl,
      });
    } catch (err) {
      console.log("Could not set company info");
    }

    try {
      setRecommendations({
        buy: stockRecommendationsJSON[0].buy,
        sell: stockRecommendationsJSON[0].sell,
        strongBuy: stockRecommendationsJSON[0].strongBuy,
        strongSell: stockRecommendationsJSON[0].strongSell,
        hold: stockRecommendationsJSON[0].hold,
      });
    } catch (err) {
      console.log("Could not set recommendations");
    }

    try {
      setPriceTarget({
        targetHigh: stockTargetJSON.targetHigh,
        targetLow: stockTargetJSON.targetLow,
        targetAvg: stockTargetJSON.targetMean,
      });
    } catch (err) {
      console.log("Could not set price target");
    }

    try {
      setTechnicalAnalysis({
        buy: stockTechnicalJSON.technicalAnalysis.count.buy,
        sell: stockTechnicalJSON.technicalAnalysis.count.sell,
        neutral: stockTechnicalJSON.technicalAnalysis.count.neutral,
        signal: stockTechnicalJSON.technicalAnalysis.signal,
      });
    } catch (err) {
      console.log("Could not set technical analysis");
    }

    try {
      //Get 15 most recent articles or all articles if less than 15
      let i = stockNewsJSON.length > 15 ? 15 : stockNewsJSON.length;
      var latestNews = [];
      for (var j = 0; j < i; j++) {
        //Get the date from UNIX timestamp
        var UNIXDate = new Date(stockNewsJSON[j].datetime * 1000);
        var year = UNIXDate.getFullYear();
        var month = UNIXDate.getMonth();
        var day = UNIXDate.getDate();
        var convertedDate = month + "-" + day + "-" + year;
        latestNews.push({
          date: convertedDate,
          headline: stockNewsJSON[j].headline,
          link: stockNewsJSON[j].url,
        });
      }
      setCompanyNews(latestNews);
    } catch (err) {
      console.log("Could not set company news");
    }

    try {
      setNewsSentiment({
        ticker: stockInfoJSON.ticker,
        companyNewsScore: stockSentimentJSON.companyNewsScore,
        sectorAverageNewsScore: stockSentimentJSON.sectorAverageNewsScore,
        bullishPercent: stockSentimentJSON.sentiment.bullishPercent,
        sectorAverageBullishPercent:
          stockSentimentJSON.sectorAverageBullishPercent,
        bearishPercent: stockSentimentJSON.sentiment.bearishPercent,
        sectorAverageBearishPercent:
          1 - stockSentimentJSON.sectorAverageBullishPercent,
      });
    } catch (err) {
      console.log("Could not set news sentiment");
    }

    try {
      setNewsBuzz({
        articlesInLastWeek: stockSentimentJSON.buzz.articlesInLastWeek,
        weeklyAverage: stockSentimentJSON.buzz.weeklyAverage,
        buzzScore: stockSentimentJSON.buzz.buzz,
      });
    } catch (err) {
      console.log("Could not set news buzz");
    }
  };

  //All of our site data, seperated by component, sample data included
  const [basicInfo, setBasicInfo] = useState({
    name: "Facebook",
    ticker: "FB",
    price: 280.65,
    change: -0.35,
    todayHigh: 281.85,
    todayLow: 279.5,
    openPrice: 280.05,
    prevClose: 276.05,
  });

  const [earnings, setEarnings] = useState({
    quarter: 1,
    date: "01-01-2020",
    year: 2020,
    epsEstimate: 2.07,
    epsActual: 2.09,
    revEstimate: 200000000,
    revActual: 210000000,
  });

  const [related, setRelated] = useState({
    related: ["MSFT", "FB", "GOOG"],
  });

  const [companyInfo, setCompanyInfo] = useState({
    industry: "Technology",
    marketCap: 500000000,
    ipoDate: "01-01-2020",
    companyURL: "https://apple.com",
  });

  const [recommendations, setRecommendations] = useState({
    buy: 5,
    sell: 2,
    strongBuy: 7,
    strongSell: 6,
    hold: 5,
  });

  const [priceTarget, setPriceTarget] = useState({
    targetHigh: 310.22,
    targetLow: 302.55,
    targetAvg: 307.33,
  });

  const [technicalAnalysis, setTechnicalAnalysis] = useState({
    buy: 5,
    sell: 2,
    neutral: 2,
    signal: "Buy",
  });

  const [companyNews, setCompanyNews] = useState([
    {
      date: "01-01-2020",
      headline:
        "Apple Confirms Serious Problem Affecting Mac, iPad, iPhone Users",
      link:
        "https://www.forbes.com/sites/gordonkelly/2020/04/28/apple-iphone-ios-13-problem-crash-security-stability-macos-ipad-iphone-users/",
    },
    {
      date: "01-05-2020",
      headline:
        "Apple Confirms Serious Problem Affecting Mac, iPad, iPhone Users",
      link:
        "https://www.forbes.com/sites/gordonkelly/2020/04/28/apple-iphone-ios-13-problem-crash-security-stability-macos-ipad-iphone-users/",
    },
    {
      date: "01-10-2020",
      headline:
        "Apple Confirms Serious Problem Affecting Mac, iPad, iPhone Users",
      link:
        "https://www.forbes.com/sites/gordonkelly/2020/04/28/apple-iphone-ios-13-problem-crash-security-stability-macos-ipad-iphone-users/",
    },
  ]);

  const [newsSentiment, setNewsSentiment] = useState({
    ticker: "AAPL",
    companyNewsScore: 0.7352,
    sectorAverageNewsScore: 0.519,
    bullishPercent: 0.875,
    sectorAverageBullishPercent: 0.62,
    bearishPercent: 0.125,
    sectorAverageBearishPercent: 0.38,
  });

  const [newsBuzz, setNewsBuzz] = useState({
    articlesInLastWeek: 136,
    weeklyAverage: 208.5,
    buzzScore: 0.6522,
  });

  //Get the stock data on page load
  useEffect(() => {
    getStockData(ticker);
  }, [ticker]);

  return (
    <Wrapper>
      <ButtonHolder>
        <ButtonGroup onClick={switchFinancials}>Financials</ButtonGroup>
        <ButtonGroup onClick={switchNews}>News</ButtonGroup>
      </ButtonHolder>
      {isFinancialView ? (
        <StockView
          basicInfo={basicInfo}
          earnings={earnings}
          related={related}
          companyInfo={companyInfo}
          recommendations={recommendations}
          priceTarget={priceTarget}
          technicalAnalysis={technicalAnalysis}
        />
      ) : (
        <NewsView
          companyNews={companyNews}
          newsSentiment={newsSentiment}
          newsBuzz={newsBuzz}
        />
      )}
    </Wrapper>
  );
};

export default StockEngine;
