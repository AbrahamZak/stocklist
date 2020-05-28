import React from 'react';

import styled from 'styled-components';

const StockInfo = ({dailyHigh, dailyLow, fiftyTwoWkHigh, fiftyTwoWkLow, PE, marketCap}) => {
    
    const InfoLabelLeft = styled.div`
    font-family: 'PT Sans', serif;
    margin-left: 2.5%;
    font-size: 1rem;
    float: left;
    width: 45%;
    `

    const InfoLabelRight = styled.div`
    font-family: 'PT Sans', serif;
    margin-left: 2.5%;
    font-size: 1rem;
    float: right;
    width: 45%;
    `

    //Convert large numbers to string with commas
    const format = num => 
        String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
        
    return (  
        <>
        <InfoLabelLeft>
            <p>Daily High: {dailyHigh}</p>
            <p>Daily Low: {dailyLow}</p>
            <p>PE Ratio: {PE}</p>
        </InfoLabelLeft>
        <InfoLabelRight>
            <p>52 Week High: {fiftyTwoWkHigh}</p>
            <p>52 Week Low: {fiftyTwoWkLow}</p>
            <p>Market Cap: ${format(marketCap)}</p>
        </InfoLabelRight>
        </>
    );
}
 
export default StockInfo;