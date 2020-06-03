import React from "react";

import styled from "styled-components";

const TitleLabel = styled.p`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  margin-bottom: 0;
  font-size: 3rem;
  font-weight: bold;
`;

const BodyText = styled.div`
  font-family: "PT Sans", serif;
  margin-left: 2.5%;
  font-size: 1rem;
`;

//News Buzz component
const NewsBuzz = ({ articlesInLastWeek, weeklyAverage, buzzScore }) => {
  return (
    <>
      <TitleLabel>Buzz:</TitleLabel>
      <BodyText>
        <p>Articles Posted (Past Week): {articlesInLastWeek}</p>
        <p>Weekly Average: {weeklyAverage}</p>
        <p>Buzz Score: {buzzScore}%</p>
      </BodyText>
    </>
  );
};

export default NewsBuzz;
