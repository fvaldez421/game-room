import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from './Buttons';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  height: 120px;
  min-width: 300px;
  margin: 0 35px;
  border-bottom: 1px solid #aaa;
`;
const CardImg = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid #aaa;
  object-fit: contain;
`;
const GameButton = styled(PrimaryButton)`
  margin-right: 15px;
  border-radius: 7px;
  border: 2px solid #aaa;
`;
const CardText = styled.div`
  position: relative;
  padding: 0 20px;
  height: 102px;
  flex: 8 5;
  > h4 {
    margin: 0 0 10px;
  }
  >p {
    margin: 0 0 10px;
    font-size: 12px;
    min-height: 26px;
  }
  .gameLink {s
    background-color: #2862a7;
    border: 1px solid rgba(27,31,35,.2);
    background-image: linear-gradient(-180deg, #349ed0, #2862a7 90%);
  }
  .gitHubLink {
    padding: 6.5px 12px 5.5px;
    background-color: #28a745;
    border: 1px solid rgba(27,31,35,.2);
    background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  }
`;


const GameCard = ({ name, link = "https://www.google.com", gitHub, desc, imgUrl }) => {
  return (
    <CardContainer>
      <CardImg src={imgUrl} alt={name} />
      <CardText>
        <h4>{name}</h4>
        <p>{desc}</p>
        <a href={link}>
          <GameButton className="gameLink">
            Play Game!
          </GameButton>
        </a>
        <a href={gitHub}>
          <GameButton className="gitHubLink">
            GitHub!
          </GameButton>
        </a>
      </CardText>
    </CardContainer>
  )
}

export default GameCard;
