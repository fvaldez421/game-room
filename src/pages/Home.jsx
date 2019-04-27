import React, { Component } from 'react';
import styled from 'styled-components';
import { Consumer } from '../App';

import GameCard from '../components/GameCard';
import { growX } from '../components/StyleHelpers';
import snakeImg from '../assets/snake.JPG';
import memTiles from '../assets/memtiles.JPG';

const Dashboard = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
const ScoresContainer = styled.div`
  width: 270px;
  padding: 0 15px;
  height: calc(100vh - 62px);
  position: relative;
  display: inline-block;
  background: slategrey;
  border: 1px solid #bbb;
  animation: ${growX(270)} .5s 1;
  > h3 {
    width: 100%;
    margin: 10px 0;
  }
`;
const Games = styled.div`
  position: relative;
  padding: 10px 0 40px;
  display: inline;
  flex-direction: row;
  flex: 8 3;
  border: 1px solid #bbb;
`;
const ScoresWrap = styled.div`
  width: 100%;
`;


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: ''
    }
  }
  render() {

    // const { snakeScore="90" } = this.props;
    // const scores = [
    //   {
    //     name: 'Snake!',
    //     score: snakeScore
    //   }
    // ];
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
        name: 'Memory Tiles: The Office Edition',
        desc: "A classic game of Snake! Harness your skills to reach the highest level and teach your friends who's boss",
        link: 'https://fvaldez421.github.io/ReactGame/',
        gitHub: 'https://github.com/fvaldez421/GuessingGame-React',
        imgUrl: memTiles
      },
    ];

    return (
      <Consumer>
        {({ user }) =>
          <Dashboard>
            <ScoresContainer>
              <h3>Welcome {user.username}!</h3>
              <ScoresWrap>

              </ScoresWrap>
            </ScoresContainer>
            <Games>
              {games.map(game =>
                <GameCard key={game.id} {...game} />
              )}
            </Games>
          </Dashboard>
        }
      </Consumer>
    )
  }
}

export default HomePage;