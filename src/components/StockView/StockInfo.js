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

const StockInfo = ({industry, marketCap, ipoDate, companyURL}) => {

    //Convert large numbers to string with commas
    const format = num => 
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
       
    return (  
        <>
        <TitleLabel>Company Info:</TitleLabel>
        <BodyText>
        <p>Industry: {industry}</p>
        <p>Market Cap: ${format(marketCap)}</p>
        <p>IPO Date: {ipoDate}</p>
        <p>Company Website: {companyURL}</p>
        </BodyText>
        </>
    );
}
 
export default StockInfo;