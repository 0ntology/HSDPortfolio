import React from 'react';

const LeftArrowIcon = ({stroke, width, height}) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      width={width}
      height={height}
    >
      <title>
        left_arrow
      </title>
      <polyline
        points="106 107 106 140 40.5 74.5 107 7.5 108 42"
        style={styles.polyline(stroke)}
      />
      <polyline
        points="89 62.5 97 54.5 97.25 54.42 96.62 32.89 55.11 74.71 96 115.6 96 95 96 94.5 89 87.5"
        style={styles.polyline(stroke)}
      />
      <circle
        cx="78.5"
        cy="74"
        r="4.5"
        style={styles.circle(stroke)}
      />
    </svg>
  );
};

export default LeftArrowIcon;

const styles = {
  polyline: (strokeColor) => {
    return {
      fill: 'none',
      stroke: `${strokeColor}`,
      strokeMiterlimit: 10,
      strokeWidth: '3px'
    }
  },
  circle: (strokeColor) => {
    return {
      fill: 'none',
      stroke: `${strokeColor}`,
      strokeMiterlimit: 10,
      strokeWidth: '2px'
    }
  }
};
