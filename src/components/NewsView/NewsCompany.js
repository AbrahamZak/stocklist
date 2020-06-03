import React from "react";

import styled from "styled-components";

const TitleLabel = styled.p`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  margin-bottom: 0;
  font-size: 3rem;
  font-weight: bold;
`;

const NewsList = styled.ul`
  font-family: "PT Sans", serif;
  font-size: 1rem;
  a {
    color: white;
  }
`;

//The company news component, displays all news articles from API
const NewsCompany = ({ companyNews }) => {
  return (
    <>
      <TitleLabel>Company News:</TitleLabel>
      <NewsList>
        {companyNews.map((listing, index) => (
          <li key={index}>
            <a rel="noopener noreferrer" target="_blank" href={listing.link}>
              {listing.headline}
            </a>
            &nbsp; ({listing.date})
          </li>
        ))}
      </NewsList>
    </>
  );
};

export default NewsCompany;
