import React, { Component } from 'react';
import styled from 'styled-components';
import { Consumer } from '../App';

import ScoreBar from '../components/ScoreBar';
import GameCard from '../components/GameCard';
import snakeImg from '../assets/snake.JPG';
import memTiles from '../assets/memtiles.JPG';

const Dashboard = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
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
            <Games>
              {games.map(game =>
                <GameCard key={game.id} {...game} />
              )}
            </Games>
            <ScoreBar user={user} />
          </Dashboard>
        }
      </Consumer>
    )
  }
}

export default HomePage;