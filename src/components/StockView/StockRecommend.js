import React from 'react';

import styled from 'styled-components';

const TitleLabel = styled.p`
font-family: 'PT Sans', serif;
margin-left: 2.5%;
margin-bottom: 0;
font-size: 3rem;
font-weight: bold;
`

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

const BodyText = styled.p`
margin: 0px;
font-family: 'PT Sans', serif;
margin-left: 2.5%;
font-size: 1rem;
`

const StockRecommend = ({buy, sell, hold, strongBuy, strongSell}) => {

    return ( 
        <>
        <TitleLabel>Recommendations:</TitleLabel>
        <InfoLabelLeft>
        <p>Buy: {buy}</p>
        <p>Strong Buy: {strongBuy}</p>
        </InfoLabelLeft>
        <InfoLabelRight>
        <p>Sell: {sell}</p>
        <p>Strong Sell: {strongSell}</p>
        </InfoLabelRight>
        <BodyText>Hold: {hold}</BodyText>
        </>
     )
    ;
}
 
export default StockRecommend;