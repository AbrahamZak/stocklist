import React from 'react';

import StockView from './StockView/component'

const StockEngine = () => {
    return (  
        <StockView
        name = {"Facebook"}
        ticker = {"FB"}
        price = {280.65}
        change = {-.35}
        dailyHigh = {281.85}
        dailyLow = {279.50}
        fiftyTwoWkHigh = {291.05}
        fiftyTwoWkLow = {256.08}
        PE = {22.5}
        marketCap = {20000000000}
        />
    );
}
 
export default StockEngine;