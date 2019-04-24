import React, { Component } from 'react';
import styled from 'styled-components';
import GameCard from '../components/GameCard';
import { slideLeft } from '../components/StyleHelpers';


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
        <Scores>
          Scores Go Here
        </Scores>
        <Games>
          {games.map(({ name, link, imgUrl }) => 
            <GameCard name={name} link={link} imgUrl={imgUrl} />
          )}
        </Games>
      </Dashboard>
    )
  }
}

export default HomePage;