import React from 'react';

import styled from 'styled-components';

const TitleLabel = styled.p`
font-family: 'PT Sans', serif;
margin-left: 2.5%;
margin-bottom: 0;
font-size: 3rem;
font-weight: bold;
`

const BodyText = styled.div`
font-family: 'PT Sans', serif;
margin-left: 2.5%;
font-size: 1rem;
`

const StockTarget = ({targetHigh, targetLow, targetAvg}) => {

    //Convert large numbers to string with commas
    const format = num => 
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
       
    return (  
        <>
        <TitleLabel>Price Targets:</TitleLabel>
        <BodyText>
        <p>Target High: ${format(targetHigh)}</p>
        <p>Target Avg: ${format(targetAvg)}</p>
        <p>Target Low: ${format(targetLow)}</p>
        </BodyText>
        </>
    );
}
 
export default StockTarget;