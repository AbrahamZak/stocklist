import React from 'react';

import StockView from './StockView/component'

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


    return (  
        <StockView
            basicInfo = {basicInfo}
            earnings = {earnings}
            related = {related}
            companyInfo = {companyInfo}
            recommendations = {recommendations}
            priceTarget = {priceTarget}
            technicalAnalysis = {technicalAnalysis}
        />
    );
}
 
export default StockEngine;