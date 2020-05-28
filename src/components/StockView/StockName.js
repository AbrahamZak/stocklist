import React from 'react';

import styled from 'styled-components';

const StockName = ({name, ticker}) => {
    const NameLabel = styled.p`
    font-family: 'PT Sans', serif;
    margin-left: 2.5%;
    margin-bottom: 0;
    font-size: 3rem;
    font-weight: bold;
    `

    return (  
        <NameLabel>
            {name} ({ticker})
        </NameLabel>
    );
}
 
export default StockName;