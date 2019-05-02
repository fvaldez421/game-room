/**
 * style helpers
 */
import { keyframes } from 'styled-components';

export const position = ({ position = 'relative' }) => position
export const margin = ({ margin = '0' }) => margin
export const padding = ({ padding = '0' }) => padding;
export const float = ({ float = 'none' }) => float

export const shiftX = (from, to) => keyframes`
  from {
    width: ${from + 'px'};
  }
  to {
    width: ${to + 'px'};
  }
`;
