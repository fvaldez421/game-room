import React, { Component } from 'react';
import styled from 'styled-components';

const Dashboard = styled.div`
  height: 100%;
  width: 100%;
`;
const Games = styled.div`
  height: calc(100% - 2px);
  display: inline-block;
  width: calc(100% - 204px);
  border: 1px solid white;
`;
const Scores = styled.div`
  height: calc(100% - 2px);  
  display: inline-block;
  width: 200px;
  border: 1px solid white;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: ''
    }
  }
  render() {
    return (
      <Dashboard>
        <Games>
          Games Go Here
        </Games>
        <Scores>
          Scores Go Here
        </Scores>
      </Dashboard>
    )
  }
}

export default HomePage;