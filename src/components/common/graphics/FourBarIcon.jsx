import React from 'react';
import Radium from 'radium';

const FourBarIcon = ({stroke, width, height}) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1366 660"
      width={width}
      height={height}
      style={styles.base(stroke)}
    >
      <title>four-line</title>
      <line
        y1="51.5"
        x2="1366"
        y2="46.5"
      />
      <line
        y1="239.5"
        x2="1366"
        y2="234.5"
      />
      <line
        y1="427.5"
        x2="1366"
        y2="422.5"
      />
      <line
        y1="615.5"
        x2="1366"
        y2="610.5"
      />
    </svg>
  );
};

export default Radium(FourBarIcon);

const styles = {
  base: (strokeColor) => {
    return {
      fill: 'none',
      stroke: `${strokeColor}`,
      strokeMiterlimit: 10,
      strokeWidth: '100px',
      ':hover': {
        stroke: `white`,
        transform: 'scale(1.05)',
      }
    }
  }
};
