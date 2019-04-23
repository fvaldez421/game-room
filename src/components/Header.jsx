import React from 'react';
import styled from 'styled-components';

import { PrimaryButton } from './Buttons';

const HeaderWrap = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #044368;
  > button {
    right: 0;
  }
  > h2 {
    color: #fff;
    margin-left: 20px;
  }
`;


const Header = ({ loggedIn, loginCB, logoutCB }) => {
  return (
    <HeaderWrap>
      <HeaderContent>
        <h2>Welcome to Game Room!</h2>
        <PrimaryButton
          primary
          margin='0 10px 0 0'
          position='absolute'
          onClick={loggedIn ? logoutCB : loginCB}
        >
          {loggedIn ? 'Logout' : 'Login'}
        </PrimaryButton>

      </HeaderContent>
    </HeaderWrap>
  )
}

export default Header;
