import React from 'react';

import styled from 'styled-components';

const StockPrice = ({price, change}) => {
    const PriceLabel = styled.p`
    font-family: 'PT Sans', serif;
    margin-left: 2.5%;
    margin-top: 0;
    font-size: 2rem;
    `

    //Add a sign to positive changes
    let sign = null;
    if (change>=0){
        sign = '+';
    }

    return (  
        <PriceLabel>
            ${price} ({sign}{change}%)
        </PriceLabel>
    );
}
 
export default StockPrice;