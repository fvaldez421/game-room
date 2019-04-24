import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  height: 120px;
  min-width: 300px;
  margin: 0 20px;
  border-bottom: 1px solid #aaa;
`;
const CardImg = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid #aaa;
`;
const CardText = styled.div`
  position: relative;
  padding: 0 20px;
  flex: 8 5;
  > h4 {
    margin: 0;
  }
  > a {
    color: #fff;
    padding: 6px 20px;
    margin-right: 15px;
    border: 2px solid #aaa;
    border-radius: 7px;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
  }
  > .gameLink {
    background-color: #2862a7;
    border: 1px solid rgba(27,31,35,.2);
    background-image: linear-gradient(-180deg, #349ed0, #2862a7 90%);
  }
  > .gitHubLink {
    background-color: #28a745;
    border: 1px solid rgba(27,31,35,.2);
    background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  }
`;

const GameCard = ({ name, link = "https://www.google.com", desc, imgUrl }) => {
  return (
    <CardContainer>
      <CardImg src={imgUrl} alt={name} />
      <CardText>
        <h4>{name}</h4>
        <p>{desc}</p>
        <a className="gameLink" href={link}>Play Game!</a>
        <a className="gitHubLink" href={link}>GitHub!</a>
      </CardText>
    </CardContainer>
  )
}

export default GameCard;
