import React, { useState, useEffect } from "react";

import styled from "styled-components";

import StockView from "./StockView/component";
import NewsView from "./NewsView/component";
import Loading from "./Loading";

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
  //Get ticker from params
  let ticker = props.match.params.ticker;
  //Variable for current view
  const [isFinancialView, setCurrentView] = useState(true);
  //Variable for if stock data is loading
  const [isLoading, setLoading] = useState(true);

  //Functions to switch view when selected in view
  function switchFinancials() {
    setCurrentView(true);
  }
  function switchNews() {
    setCurrentView(false);
  }

  //Get data from API based on ticker and fill our data
  const getStockData = async (ticker) => {
    //Loading begins
    setLoading(true);
    //Get and store all neccessary API calls in JSON format
    const stockInfo = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockInfoJSON = await stockInfo.json();

    //Get today's date
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    const todayFormated = yyyy + "-" + mm + "-" + dd;

    //Get last week's date
    const oneWeek = new Date();
    oneWeek.setDate(today.getDate() - 7);
    dd = String(oneWeek.getDate() - 1).padStart(2, "0");
    mm = String(oneWeek.getMonth() + 1).padStart(2, "0");
    yyyy = oneWeek.getFullYear();
    const oneWeekFormatted = yyyy + "-" + mm + "-" + dd;

    //Get last month's date
    const oneMonth = new Date();
    oneMonth.setDate(today.getDate() - 30);
    dd = String(oneMonth.getDate() - 1).padStart(2, "0");
    mm = String(oneMonth.getMonth() + 1).padStart(2, "0");
    yyyy = oneMonth.getFullYear();
    const oneMonthFormatted = yyyy + "-" + mm + "-" + dd;

    //Get UNIX time for current moment
    var unixNow = Math.floor(Date.now() / 1000);

    //Get news for last week
    const stockNews = await fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=${oneWeekFormatted}&to=${todayFormated}&token=br8pn77rh5ral083irt0`
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

    //Get earnings from last 30 days (API limitations for free version)
    const stockEarnings = await fetch(
      `https://finnhub.io/api/v1/calendar/earnings?from=${oneMonthFormatted}&to=${todayFormated}&symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockEarningsJSON = await stockEarnings.json();

    const stockDaily = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=br8pn77rh5ral083irt0`
    );
    const stockDailyJSON = await stockDaily.json();

    const stockCandle = await fetch(
      `https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=1&from=788918400&to=${unixNow}&token=br8pn77rh5ral083irt0`
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
      setCandles({
        ticker: stockInfoJSON.ticker,
        c: stockCandleJSON.c,
        h: stockCandleJSON.h,
        l: stockCandleJSON.l,
        o: stockCandleJSON.o,
        t: stockCandleJSON.t,
        v: stockCandleJSON.v,
      });
    } catch (err) {
      console.log("Could not set candles");
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

    //Loading completed
    setLoading(false);
  };

  //All of our site data, seperated by component, initialized to null or 0
  const [basicInfo, setBasicInfo] = useState({
    name: null,
    ticker: null,
    price: 0,
    change: 0,
    todayHigh: 0,
    todayLow: 0,
    openPrice: 0,
    prevClose: 0,
  });

  const [candles, setCandles] = useState({
    ticker: "SYMBOL",
    c: [],
    h: [],
    l: [],
    o: [],
    t: [],
    v: [],
  });

  const [earnings, setEarnings] = useState({
    quarter: 0,
    date: null,
    year: null,
    epsEstimate: 0,
    epsActual: 0,
    revEstimate: 0,
    revActual: 0,
  });

  const [related, setRelated] = useState({
    related: [null],
  });

  const [companyInfo, setCompanyInfo] = useState({
    industry: null,
    marketCap: 0,
    ipoDate: null,
    companyURL: null,
  });

  const [recommendations, setRecommendations] = useState({
    buy: 0,
    sell: 0,
    strongBuy: 0,
    strongSell: 0,
    hold: 0,
  });

  const [priceTarget, setPriceTarget] = useState({
    targetHigh: 0,
    targetLow: 0,
    targetAvg: 0,
  });

  const [technicalAnalysis, setTechnicalAnalysis] = useState({
    buy: 0,
    sell: 0,
    neutral: 0,
    signal: null,
  });

  const [companyNews, setCompanyNews] = useState([
    {
      date: null,
      headline: null,
      link: null,
    },
  ]);

  const [newsSentiment, setNewsSentiment] = useState({
    ticker: null,
    companyNewsScore: 0,
    sectorAverageNewsScore: 0,
    bullishPercent: 0,
    sectorAverageBullishPercent: 0,
    bearishPercent: 0,
    sectorAverageBearishPercent: 0,
  });

  const [newsBuzz, setNewsBuzz] = useState({
    articlesInLastWeek: 0,
    weeklyAverage: 0,
    buzzScore: 0,
  });

  //Get the stock data on page load
  useEffect(() => {
    getStockData(ticker);
  }, [ticker]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <ButtonHolder>
        <ButtonGroup onClick={switchFinancials}>Financials</ButtonGroup>
        <ButtonGroup onClick={switchNews}>News</ButtonGroup>
      </ButtonHolder>
      {isFinancialView ? (
        <StockView
          loggedIn={props.loggedIn}
          basicInfo={basicInfo}
          earnings={earnings}
          related={related}
          companyInfo={companyInfo}
          recommendations={recommendations}
          priceTarget={priceTarget}
          technicalAnalysis={technicalAnalysis}
          candles={candles}
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
