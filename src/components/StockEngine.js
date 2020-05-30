import React, {useState} from 'react';

import styled from 'styled-components';

import StockView from './StockView/component'
import NewsView from './NewsView/component'

const ButtonHolder = styled.div`
background-color: darkgray;
display: flex; 
justify-content: center;
`
const ButtonGroup = styled.button`
background-color: white;
border: 1px black;
font-family: 'PT Sans', serif;
font-size: 1rem;
padding: 10px 70px; 
cursor: pointer; 
float: left; 

&:hover {
background-color: lightgray;
}
`

const StockEngine = ({ticker}) => {
    //Variable for current view
    const[isFinancialView, setCurrentView] = useState(true);

    //Functions to switch view when selected in view
    function switchFinancials(){
        setCurrentView(true)
    }
    function switchNews(){
        setCurrentView(false)
    }

  //Get data from API based on ticker and fill our data
  const getStockData = async(ticker) => {
    const stockInfo = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}`
      );
    const stockInfoJSON = await stockInfo.json();
    const stockNews = await fetch(
        `https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=2020-05-01&to=2020-05-01&token=br8pn77rh5ral083irt0`
        );
      const stockNewsJSON = await stockNews.json();
    const stockMajor = await fetch(
        `https://finnhub.io/api/v1/major-development?symbol=${ticker}&token=br8pn77rh5ral083irt0`
        );
      const stockMajorJSON = await stockMajor.json();
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
        `https://finnhub.io/api/v1/calendar/earnings?from=2010-01-01&to=2020-03-15&symbol=${ticker}&token=br8pn77rh5ral083irt0`
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
       
    setWeather({
      temp: restJSON.main.temp,
      city: restJSON.name,
      condition: restJSON.weather[0].main,
      country: restJSON.sys.country
    });
  };

    const basicInfo = {
        name: "Facebook",
        ticker: "FB",
        price: 280.65,
        change: -.35,
        todayHigh: 281.85,
        todayLow: 279.50,
        openPrice: 280.05,
        prevClose: 276.05
    }

    const earnings = {
        quarter: 1,
        date: "01-01-2020",
        year: 2020,
        epsEstimate: 2.07,
        epsActual: 2.09,
        revEstimate: 200000000,
        revActual: 210000000,
    }

    const related = {
        related: ["MSFT", "FB", "GOOG"]
    }

    const companyInfo = {
        industry: "Technology",
        marketCap: 500000000,
        ipoDate: "01-01-2020",
        companyURL: "https://apple.com"
    }

    const recommendations = {
        buy: 5,
        sell: 2,
        strongBuy: 7,
        strongSell: 6,
        hold: 5
    }

    const priceTarget = {
        targetHigh: 310.22,
        targetLow: 302.55,
        targetAvg: 307.33
    }

    const technicalAnalysis = {
        buy: 5,
        sell: 2,
        neutral: 2,
        signal: "Buy"
    }

    const companyNews = [
        {
            date: "01-01-2020",
            headline: "Apple Confirms Serious Problem Affecting Mac, iPad, iPhone Users",
            link: "https://www.forbes.com/sites/gordonkelly/2020/04/28/apple-iphone-ios-13-problem-crash-security-stability-macos-ipad-iphone-users/"
        },
        {
            date: "01-05-2020",
            headline: "Apple Confirms Serious Problem Affecting Mac, iPad, iPhone Users",
            link: "https://www.forbes.com/sites/gordonkelly/2020/04/28/apple-iphone-ios-13-problem-crash-security-stability-macos-ipad-iphone-users/"
        },
        {
            date: "01-10-2020",
            headline: "Apple Confirms Serious Problem Affecting Mac, iPad, iPhone Users",
            link: "https://www.forbes.com/sites/gordonkelly/2020/04/28/apple-iphone-ios-13-problem-crash-security-stability-macos-ipad-iphone-users/"
        }
    ]

    const majorDevelopments = [
        {
            date: "2020-05-07",
            headline: "Apple Awards $10 Mln From Advanced Manufacturing Fund To COPAN Diagnostics",
            description: "APPLE AWARDS $10 MILLION FROM ADVANCED MANUFACTURING FUND TO COPAN DIAGNOSTICS.SOURCING EQUIPMENT AND MATERIALS FOR COPAN DIAGNOSTICS FROM COMPANIES ACROSS U.S..APPLE IS ON TRACK TO REACH ITS COMMITMENT OF CONTRIBUTING $350 BILLION TO U.S. ECONOMY OVER A FIVE YEAR PERIOD.APPLE WILL SUPPORT COPAN DIAGNOSTICS' EXPANSION TO A NEW, LARGER FACILITY IN SOUTHERN CALIFORNIA.HAS DONATED TENS OF MILLIONS OF DOLLARS TOWARD GLOBAL COVID-19 RESPONSE, INCLUDING GLOBAL CITIZEN AND AMERICA'S FOOD FUND."
        },
        {
            date: "2020-05-10",
            headline: "Apple Awards $10 Mln From Advanced Manufacturing Fund To COPAN Diagnostics",
            description: "APPLE AWARDS $10 MILLION FROM ADVANCED MANUFACTURING FUND TO COPAN DIAGNOSTICS.SOURCING EQUIPMENT AND MATERIALS FOR COPAN DIAGNOSTICS FROM COMPANIES ACROSS U.S..APPLE IS ON TRACK TO REACH ITS COMMITMENT OF CONTRIBUTING $350 BILLION TO U.S. ECONOMY OVER A FIVE YEAR PERIOD.APPLE WILL SUPPORT COPAN DIAGNOSTICS' EXPANSION TO A NEW, LARGER FACILITY IN SOUTHERN CALIFORNIA.HAS DONATED TENS OF MILLIONS OF DOLLARS TOWARD GLOBAL COVID-19 RESPONSE, INCLUDING GLOBAL CITIZEN AND AMERICA'S FOOD FUND."
        },
        {
            date: "2020-05-15",
            headline: "Apple Awards $10 Mln From Advanced Manufacturing Fund To COPAN Diagnostics",
            description: "APPLE AWARDS $10 MILLION FROM ADVANCED MANUFACTURING FUND TO COPAN DIAGNOSTICS.SOURCING EQUIPMENT AND MATERIALS FOR COPAN DIAGNOSTICS FROM COMPANIES ACROSS U.S..APPLE IS ON TRACK TO REACH ITS COMMITMENT OF CONTRIBUTING $350 BILLION TO U.S. ECONOMY OVER A FIVE YEAR PERIOD.APPLE WILL SUPPORT COPAN DIAGNOSTICS' EXPANSION TO A NEW, LARGER FACILITY IN SOUTHERN CALIFORNIA.HAS DONATED TENS OF MILLIONS OF DOLLARS TOWARD GLOBAL COVID-19 RESPONSE, INCLUDING GLOBAL CITIZEN AND AMERICA'S FOOD FUND."
        }
    ]

    const newsSentiment = {
        ticker: "AAPL",
        companyNewsScore: 0.7352,
        sectorAverageNewsScore: 0.519,
        bullishPercent: 0.875,
        sectorAverageBullishPercent: 0.62,
        bearishPercent: 0.125,
        sectorAverageBearishPercent: 0.38
    }

    const newsBuzz = {
        articlesInLastWeek: 136,
        weeklyAverage: 208.5,
        buzzScore: 0.6522
    }

    return (  
        <>
        <ButtonHolder>
        <ButtonGroup onClick={switchFinancials}>Financials</ButtonGroup>
        <ButtonGroup onClick={switchNews}>News</ButtonGroup>
        </ButtonHolder>
        {isFinancialView ? (
        <StockView 
            basicInfo = {basicInfo}
            earnings = {earnings}
            related = {related}
            companyInfo = {companyInfo}
            recommendations = {recommendations}
            priceTarget = {priceTarget}
            technicalAnalysis = {technicalAnalysis}
        />
        ) : (
        <NewsView
            companyNews = {companyNews}
            majorDevelopments = {majorDevelopments}
            newsSentiment = {newsSentiment}
            newsBuzz = {newsBuzz}
        />
        )}
        </>
    );
}
 
export default StockEngine;