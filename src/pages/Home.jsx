import React, { Component } from 'react';
import styled from 'styled-components';
import GameCard from '../components/GameCard';
import { slideLeft } from '../components/StyleHelpers';
import snakeImg from '../assets/snake.JPG';

const Dashboard = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
const Scores = styled.div`
  width: 200px;
  position: relative;
  display: inline-block;
  background: slategrey;
  border: 1px solid #bbb;
  animation: ${slideLeft} .5s 1;
`;
const Games = styled.div`
  position: relative;
  padding: 10px 0 40px;
  display: inline;
  flex-direction: row;
  flex: 8 3;
  border: 1px solid #bbb;
`;


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: ''
    }
  }
  
  render() {
    const games = [
      {
        id: '886453543453345374754876',
        name: 'Snake!',
        desc: "A classic game of Snake! Harness your skills to reach the highest level and teach your friends who's boss. I like tacos with salsa and guacamole but no onions please.",
        link: 'https://fvaldez421.github.io/SnakeGame/',
        gitHub: 'https://github.com/fvaldez421/SnakeGame',
        imgUrl: snakeImg
      },
      {
        id: '886453543453345374dshfdsh76',
        name: 'Snake!',
        desc: "A classic game of Snake! Harness your skills to reach the highest level and teach your friends who's boss",
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
      {
        id: '88645354hfdgndfn',
        name: 'Snake!',
        desc: "A classic game of Snake! Harness your skills to reach the highest level and teach your friends who's boss",
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
      {
        id: '88645354sfdhbrbrt54876',
        name: 'Snake!',
        desc: "A classic game of Snake! Harness your skills to reach the highest level and teach your friends who's boss",
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
      {
        id: '883453fjgjtejtr5374754876',
        name: 'Snake!',
        desc: "A classic game of Snake! Harness your skills to reach the highest level and teach your friends who's boss",
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
            {
        id: '886sjhjsrjt43453srhstrt45374754876',
        name: 'Snake!',
        desc: "A classic game of Snake! Harness your skills to reach the highest level and teach your friends who's boss",
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
      
    ]
    return (
      <Dashboard>
        <Scores>
          Scores Go Here
        </Scores>
        <Games>
          {games.map(game => 
            <GameCard key={game.id} {...game} />
          )}
        </Games>
      </Dashboard>
    )
  }
}

export default HomePage;