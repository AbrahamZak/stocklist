import React from 'react';

import styled from 'styled-components';

import StockName from './StockName'
import StockPrice from './StockPrice'
import StockChart from './StockChart'
import StockInfo from './StockInfo'

const StockView = ({name, ticker, price, change, dailyHigh, dailyLow, fiftyTwoWkHigh, fiftyTwoWkLow, PE, marketCap}) => {
//Adjust background based on weather daily is up or down
let bg = null;
if (change>=0){
    bg = 'lightgreen';
}
else{
    bg = '#ff644d';
}

const Wrap = styled.div`
    position: absolute;
    left: 0px;
    width: 50%;
    min-height: 100%;
    background-color: ${bg};
`;
    
    return (  
        <Wrap>
            <StockName name={name} ticker={ticker}/>
            <StockPrice price={price} change={change}/>
            <StockChart/>
            <StockInfo dailyHigh = {dailyHigh} dailyLow = {dailyLow} fiftyTwoWkHigh = {fiftyTwoWkHigh} fiftyTwoWkLow = {fiftyTwoWkLow} PE = {PE} marketCap = {marketCap}/>
        </Wrap>
    );
}
 
export default StockView;