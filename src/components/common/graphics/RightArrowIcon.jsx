import React from 'react';
import Radium from 'radium';

const RightArrowIcon = ({stroke, width, height}) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      width={width}
      height={height}
      style={styles.base(stroke)}
    >
      <title>
        right_arrow
      </title>
      <polyline
        key="polyline-1"
        points="42.5 107 42.5 140 108 74.5 41.5 7.5 40.5 42"
      />
      <polyline
        key="polyline-2"
        points="59.5 62.5 51.5 54.5 51.25 54.42 51.88 32.89 93.39 74.71 52.5 115.6 52.5 95 52.5 94.5 59.5 87.5"
      />
      <circle
        cx="70"
        cy="74"
        r="4.5"
      />
    </svg>
  );
};

export default Radium(RightArrowIcon);

const styles = {
  base: (strokeColor) => {
    return {
      fill: 'none',
      stroke: `${strokeColor}`,
      strokeMiterlimit: 10,
      strokeWidth: '3px',
      ':hover': {
        stroke: `white`,
        transform: 'scale(1.05)',
      }
    }
  }
};
