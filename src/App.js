import React, { Component, createContext } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Routes from './Routes';
import { login } from './utils/api';
import './App.css';


const AppContainer = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-family: 'Cairo', sans-serif;
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

export const AppContext = createContext({ user: {}, loggedIn: false });

export const { Provider, Consumer } = AppContext;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {},
    }
  };

  async componentDidMount() {
    const user = await login();
    setTimeout(() => {
      this.setState({ user, loggedIn: !!user });
    }, 500);
  }
  
  render() {
    const { user, loggedIn } = this.state;
    return (
      <AppContainer>
        <Provider value={{ user, loggedIn }}>
          <Header loggedIn={this.state.loggedIn} loginCB={() => console.log('login')} logoutCB={() => console.log('logout')} />
          <AppContent>
            <Routes />
          </AppContent>
        </Provider>
      </AppContainer>
    );
  }
}


export default App;
