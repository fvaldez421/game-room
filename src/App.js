import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Routes from './Routes';
// import { login } from './utils/api';
import './App.css';


const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const AppContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: 60px;
`;


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <AppContent>
          <Routes />
        </AppContent>
      </AppContainer>
    );
  }
}

export default App;
