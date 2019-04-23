import styled from 'styled-components';
import { position, margin, float } from './StyleHelpers';

export const PrimaryButton = styled.button`
  position: ${position};
  font-weight: 600;
  float: ${float};
  margin: ${margin};
  border: none;
  border-radius: 10px;
  padding: ${({ padding='8px 12px' }) => padding};
  color: ${({ primary }) => primary ? 'white' : 'green'};
  background-color: ${({ primary }) => primary ? '#91B54D' : 'lightgrey' };
  &:hover {
    background-color: ${({ primary }) => primary ? 'green' : 'darkgrey'};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

