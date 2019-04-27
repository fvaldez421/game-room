/**
 * style helpers
 */
import { keyframes } from 'styled-components';

export const position = ({ position = 'relative' }) => position
export const margin = ({ margin = '0' }) => margin
export const padding = ({ padding = '0' }) => padding;
export const float = ({ float = 'none' }) => float

export const growX = fullWidth => keyframes`
  from {
    width: 0px;
  }
  to {
  width: ${fullWidth + 'px'};
  }
`;
