import React, { Component } from 'react';
import styled from 'styled-components';
import GameCard from '../components/GameCard';

const Dashboard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Games = styled.div`
  position: absolute;
  height: calc(100% - 3px);
  display: inline-flex;
  border: 1px solid white;
  justify-content: center;
  flex-wrap: wrap;
  left: 0;
  right: 200px;
  padding: 0 15px;
`;
const Scores = styled.div`
  position: absolute;
  height: calc(100% - 3px);  
  display: inline-block;
  border: 1px solid white;
  left: 0;
  right: 0;
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
        name: 'Snake!',
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
      {
        name: 'Snake!',
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
      {
        name: 'Snake!',
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
      {
        name: 'Snake!',
        link: 'www.franks-game-room.com/snake',
        imgUrl: 'this.image.com'
      },
    ]
    return (
      <Dashboard>
        <Games>
          {games.map(({ name, link, imgUrl }) => 
            <GameCard name={name} link={link} imgUrl={imgUrl} />
          )}
        </Games>
        <Scores>
          Scores Go Here
        </Scores>
      </Dashboard>
    )
  }
}

export default HomePage;