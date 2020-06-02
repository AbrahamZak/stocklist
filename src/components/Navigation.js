import React from 'react';

import styled from 'styled-components';

import NavigationButton from './NavigationView/NavigationButton'
import NavigationSearchInput from './NavigationView/NavigationSearchInput'

const Background = styled.div`
    width: 100%;
    height: 7vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    background: white;
`;

const Title = styled.p`
    font-family: 'PT Sans', serif;
    color: black;
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 10px;
`

//This is the site's navigation bar which includes the title, the search bar, and log/signup buttons
const Navigation = () => {
    return (  
        <Background>
            <Title>StockList
            <NavigationButton
                buttonText = {"Login"}
            />
            <NavigationButton
                buttonText = {"Signup"}
            />
            <NavigationSearchInput/>
            </Title>
        </Background>
    );
}
 
export default Navigation;