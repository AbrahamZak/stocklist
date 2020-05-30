import React from 'react';

import styled from 'styled-components';

import NewsCompany from './NewsCompany'
import NewsMajor from './NewsMajor'
import NewsSentiment from './NewsSentiment'
import NewsBuzz from './NewsBuzz'

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
    background-color: ${props => props.bg};
    min-height: 100vh;
`

const NewsView = ({companyNews, majorDevelopments, newsSentiment, newsBuzz}) => {

    //Adjust background based on whether news sentiment is bullish or bearish
    let bg = null;
    if (newsSentiment.bullishPercent>=0.5){
        bg = 'lightgreen';
    }
    else{
        bg = '#ff644d';
    }

    return (  
        <Background bg = {bg}>
        <WrapLeft>
            <NewsCompany
            companyNews = {companyNews}
            />
            <NewsSentiment
            ticker = {newsSentiment.ticker}
            companyNewsScore = {newsSentiment.companyNewsScore * 100}
            sectorAverageNewsScore = {newsSentiment.sectorAverageNewsScore * 100}
            bullishPercent = {newsSentiment.bullishPercent * 100}
            sectorAverageBullishPercent = {newsSentiment.sectorAverageBullishPercent * 100}
            bearishPercent = {newsSentiment.bearishPercent * 100}
            sectorAverageBearishPercent = {newsSentiment.sectorAverageBearishPercent * 100}
            />
            <NewsBuzz
            articlesInLastWeek = {newsBuzz.articlesInLastWeek}
            weeklyAverage = {newsBuzz.weeklyAverage}
            buzzScore = {newsBuzz.buzzScore * 100}
            />
        </WrapLeft>
        <WrapRight>
            <NewsMajor
            majorDevelopments = {majorDevelopments}
            />
        </WrapRight>
        </Background>
    );
}
 
export default NewsView;