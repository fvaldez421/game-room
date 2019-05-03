import React, { useState } from 'react';
import styled from 'styled-components';
import { resizeWidth } from './StyleHelpers';


const ScoresContainer = styled.div`
  height: calc(100vh - 62px);
  position: relative;
  display: inline-block;
  background: slategrey;
  border: ${({ expanded=false }) => expanded ? '1px solid #bbb' : 'none'};
  border-top: none;
  border-bottom: none;
  width: ${({ expanded = false }) => (expanded ? '270' : '0') + 'px'};
  animation: ${({ expanded = false }) => resizeWidth(expanded ? '0' : '270', expanded ? '270' : '0')} .5s 1;
`;
const ToggleClicker = styled.button`
  position: absolute;
  display: flex;
  z-index: 10;
  top: 0;
  right: calc(100% + 1px);
  padding: 6px 8px 6px 12px;
  font-weight: 600;
  background: #fff;
  border: 1px solid #777;
  border-right: none;
  border-radius: 10px 0 0 10px;
  width: ${({ expanded = false }) => (expanded ? '29' : '65') + 'px'};
  animation: ${({ expanded = false }) => resizeWidth(expanded ? '65' : '29', expanded ? '29' : '65')} .5s 1;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  > span {
    overflow: hidden;
  }
`;
const ScoresWrap = styled.div`
  padding: 0 15px;
  height: 100%;
  width: calc(100% - 30px);
  overflow: hidden;
  white-space: nowrap;
  > h3 {
    width: 100%;
    margin: 10px 0;
    line-height: 14px;
  }
`;

const ScoreBar = ({ user }) => {
  const [barExpanded, toggleBar] = useState(false);
  return (
    <ScoresContainer expanded={barExpanded} >
      <ToggleClicker expanded={barExpanded} onClick={() => toggleBar(!barExpanded)}>
        <span>
          {barExpanded ? '>' : 'Scores'}
        </span>
      </ToggleClicker>
      <ScoresWrap>
        <h3>Welcome {user.username}!</h3>

      </ScoresWrap>
    </ScoresContainer>
  )
};

export default ScoreBar;