import React from 'react';

import styled from 'styled-components';

import StockView from './StockView/component'
import NewsView from './NewsView/component'

const StockEngine = () => {
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
    let bg = null;
    if (basicInfo.change>=0){
        bg = 'lightgreen';
    }
    else{
        bg = '#ff644d';
    }
    const ButtonHolder = styled.div`
    background-color: ${bg};
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

    &:not(:last-child) {
    border-right: none; 
    }

    &:after {
    content: "";
    clear: both;
    display: table;
    }

    &:hover {
    background-color: lightgray;
    }
    `

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
        <ButtonGroup>Financials</ButtonGroup>
        <ButtonGroup>News</ButtonGroup>
        </ButtonHolder>
        <StockView
            basicInfo = {basicInfo}
            earnings = {earnings}
            related = {related}
            companyInfo = {companyInfo}
            recommendations = {recommendations}
            priceTarget = {priceTarget}
            technicalAnalysis = {technicalAnalysis}
        />
        <NewsView
            companyNews = {companyNews}
            majorDevelopments = {majorDevelopments}
            newsSentiment = {newsSentiment}
            newsBuzz = {newsBuzz}
        />
        </>
    );
}
 
export default StockEngine;