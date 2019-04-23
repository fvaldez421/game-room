import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  background-color: #fff;
  height: 250px;
  width: 45%;
  margin: auto;
`;

const GameCard = ({ name, link, imgUrl }) => {
  return (
    <CardContainer>
      <h4>{name}</h4>
    </CardContainer>
  )
}

export default GameCard;
