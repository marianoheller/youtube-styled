import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const offset= 187;
const duration= 1.4;

const rotator = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(270deg); }
`;

const dash = keyframes`
  0% { stroke-dashoffset: ${offset}; }
  50% {
    stroke-dashoffset: ${offset/4};
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${offset};
    transform: rotate(450deg);
  }
`;

const colors = keyframes`
  0% { stroke: #4285F4; }
	25% { stroke: #DE3E35; }
	50% { stroke: #F7C223; }
	75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
`;

const Svg = styled.svg`
  animation: ${rotator} ${`${duration}s`} linear infinite;
`;

const Circle = styled.circle`
  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    ${dash} ${`${duration}s`} ease-in-out infinite, 
    ${colors} ${`${duration*4}s`} ease-in-out infinite;
`;



const Spinner = props => {
  return (
    <Svg
      width={`${props.width}px`}
      height={`${props.height}px`}
      viewBox="0 0 66 66"
    >
      <Circle
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </Svg>
  )
}

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Spinner.defaultProps = {
  width: 40,
  height: 40,
};

export default Spinner;
