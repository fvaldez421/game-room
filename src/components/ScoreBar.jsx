import React, { useState } from 'react';
import styled from 'styled-components';
import { shiftX } from './StyleHelpers';


const ScoresContainer = styled.div`
  height: calc(100vh - 62px);
  position: relative;
  display: inline-block;
  background: slategrey;
  /* border: 1px solid #777; */
  border: ${({ expanded=false }) => expanded ? '1px solid #bbb' : 'none'};
  width: ${({ expanded = false }) => (expanded ? '270' : '0') + 'px'};
  animation: ${({ expanded = false }) => shiftX(expanded ? '0' : '270', expanded ? '270' : '0')} .5s 1;
  > h3 {
    width: 100%;
    margin: 10px 0;
  }
`;
const ToggleClicker = styled.button`
  position: absolute;
  z-index: 10;
  top: 0;
  right: calc(100% + 1px);
  width: auto;
  padding: 6px 8px 6px 12px;
  font-weight: 600;
  background: #fff;
  border: 1px solid #777;
  border-right: none;
  border-radius: 10px 0 0 10px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
const ScoresWrap = styled.div`
  padding: 0 15px;
  height: 100%;
  width: calc(100% - 30px);
  overflow: hidden;
  white-space: nowrap;
`;

const ScoreBar = ({ user }) => {
  const [barExpanded, toggleBar] = useState(false);
  return (
    <ScoresContainer expanded={barExpanded} >
      <ToggleClicker onClick={() => toggleBar(!barExpanded)}>
        {barExpanded ? '>' : 'Scores'}
      </ToggleClicker>
      <ScoresWrap>
        <h3>Welcome {user.username}!</h3>

      </ScoresWrap>
    </ScoresContainer>
  )
};

export default ScoreBar;