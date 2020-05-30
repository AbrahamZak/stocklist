import React from 'react';

import styled from 'styled-components';

const NewsMajor = ({majorDevelopments}) => {

    const TitleLabel = styled.p`
    font-family: 'PT Sans', serif;
    margin-left: 2.5%;
    margin-bottom: 0;
    font-size: 3rem;
    font-weight: bold;
    `

    const NewsList = styled.ul`
    font-family: 'PT Sans', serif;
    font-size: 1rem;
    `

    return (  
        <>
        <TitleLabel>Major Developments:</TitleLabel>
        <NewsList>
        {majorDevelopments.map(listing => <li><strong>{listing.headline}</strong> - {listing.description} ({listing.date})</li>)}
        </NewsList>
        </>
    );
}
 
export default NewsMajor;