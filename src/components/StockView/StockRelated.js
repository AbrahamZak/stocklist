import React from 'react';

import styled from 'styled-components';

const StockRelated = ({related}) => {

    const TitleLabel = styled.p`
    font-family: 'PT Sans', serif;
    margin-left: 2.5%;
    margin-bottom: 0;
    font-size: 3rem;
    font-weight: bold;
    `

    const CommaList = styled.ul`
    font-family: 'PT Sans', serif;
    margin-left: 2.5%;
    font-size: 1rem;
    display: inline;
    list-style: none;
    padding: 0px;

    li{
        display: inline;
    }
    
    li::after {
        content: ",\\00A0";
    }

    li:last-child::after {
        content: "";
    }
    `

    return (  
        <>
        <TitleLabel>Related Companies:</TitleLabel>
        <CommaList>
        {related.map(company => <li>{company}</li>)}
        </CommaList>
        </>
    );
}
 
export default StockRelated;