import React from 'react';

import styled from 'styled-components';

const NewsCompany = ({companyNews}) => {
    
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
    a{
        color: black;
    }
    `

    return ( 
        <>
        <TitleLabel>Company News:</TitleLabel>
        <NewsList>
        {companyNews.map(listing => <li>
            <a rel="noopener noreferrer" target="_blank" href={listing.link}>{listing.headline}</a>
            &nbsp; ({listing.date})</li>)}
        </NewsList>
        </>
     );
}
 
export default NewsCompany;