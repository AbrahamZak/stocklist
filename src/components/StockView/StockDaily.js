import React from 'react';

import styled from 'styled-components';

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

//Daily stock information
const StockDaily = ({todayHigh, todayLow, openPrice, prevClose}) => {

    //Convert large numbers to string with commas
    const format = num => 
        String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
        
    return (  
        <>
        <InfoLabelLeft>
            <p>Today's High: ${format(todayHigh)}</p>
            <p>Today's Low: ${format(todayLow)}</p>
        </InfoLabelLeft>
        <InfoLabelRight>
            <p>Open: ${format(openPrice)}</p>
            <p>Previous Close: ${format(prevClose)}</p>
        </InfoLabelRight>
        </>
    );
}
 
export default StockDaily;