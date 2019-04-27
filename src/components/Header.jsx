import React from 'react';
import styled from 'styled-components';

import { PrimaryButton } from './Buttons';


const HeaderContainer = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  border-bottom: 1px solid #005795;
  background-color: #fff;
  box-shadow: 0 2px 7px #00000047;
`;

const HeaderWrap = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  > button {
    right: 0;
  }
  > h2 {
    color: #000;
    margin-left: 20px;
  }
`;


const Header = ({ loggedIn, loginCB, logoutCB }) => (
  <HeaderContainer>
    <HeaderWrap>
      <h2>Welcome to Game Room!</h2>
      <PrimaryButton
        primary
        margin='0 10px 0 0'
        position='absolute'
        onClick={loggedIn ? logoutCB : loginCB}
      >
        {loggedIn ? 'Logout' : 'Login'}
      </PrimaryButton>

    </HeaderWrap>
  </HeaderContainer>
);


export default Header;
