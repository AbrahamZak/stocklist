import React from 'react';

import styled from 'styled-components';

import StockName from './StockName'
import StockPrice from './StockPrice'
import StockChart from './StockChart'
import StockDaily from './StockDaily'
import StockInfo from './StockInfo'
import StockEarnings from './StockEarnings'
import StockTarget from './StockTarget'
import StockRecommend from './StockRecommend'
import StockTechnical from './StockTechnical';
import StockRelated from './StockRelated';

const StockView = ({basicInfo, companyInfo, earnings, priceTarget, recommendations, technicalAnalysis, related}) => {
//Adjust background based on whether daily is up or down
let bg = null;
if (basicInfo.change>=0){
    bg = 'lightgreen';
}
else{
    bg = '#ff644d';
}

const Background = styled.div`
    overflow: hidden;
    width: 100%;
    background-color: ${bg};
    min-height: 100vh;
`

const WrapLeft = styled.div`
    float: left;
    width: 50%;
`;
    
const WrapRight = styled.div`
    float: right;
    width: 50%;
`;

    return (  
        <Background>
        <WrapLeft>
            <StockName 
            name={basicInfo.name} 
            ticker={basicInfo.ticker}/>
            <StockPrice 
            price={basicInfo.price} 
            change={basicInfo.change}/>
            <StockChart/>
            <StockDaily 
            todayHigh = {basicInfo.todayHigh} 
            todayLow = {basicInfo.todayLow} 
            openPrice = {basicInfo.todayLow} 
            prevClose = {basicInfo.prevClose}/>
            <StockInfo 
            industry = {companyInfo.industry}
            marketCap = {companyInfo.marketCap}
            ipoDate = {companyInfo.ipoDate}
            companyURL = {companyInfo.companyURL}
            />
            <StockRelated
            related = {related.related}
            />
        </WrapLeft>
        <WrapRight>
            <StockEarnings
            quarter = {earnings.quarter} 
            year = {earnings.year} 
            date = {earnings.date} 
            epsEstimate = {earnings.epsEstimate}  
            epsActual = {earnings.epsActual} 
            revEstimate = {earnings.revEstimate} 
            revActual = {earnings.revActual} 
            />
            <StockTarget
            targetHigh = {priceTarget.targetHigh}
            targetLow = {priceTarget.targetLow}
            targetAvg = {priceTarget.targetAvg}
            />
            <StockRecommend
            buy = {recommendations.buy}
            sell = {recommendations.sell}
            hold = {recommendations.hold}
            strongBuy = {recommendations.strongBuy}
            strongSell = {recommendations.strongSell}
            />
            <StockTechnical
            buy = {technicalAnalysis.buy}
            sell = {technicalAnalysis.sell}
            neutral = {technicalAnalysis.neutral}
            signal = {technicalAnalysis.signal}
            />
        </WrapRight>
        </Background>
    );
}
 
export default StockView;