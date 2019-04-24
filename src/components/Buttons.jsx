import styled from 'styled-components';
import { position, margin, float } from './StyleHelpers';

export const PrimaryButton = styled.button`
  position: ${position};
  font-weight: 600;
  float: ${float};
  margin: ${margin};
  border: 1px solid;
  border-radius: 10px;
  padding: ${({ padding='8px 12px' }) => padding};
  color: ${({ primary }) => primary ? '#005795' : '#fff'};
  border-color: ${({ primary }) => primary ? '#005795' : '#555'};
  background-color: ${({ primary }) => primary ? '#fff' : '#ddd' };
  &:hover {
    background-color: ${({ primary }) => primary ? '#bbb' : '#eee'};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

