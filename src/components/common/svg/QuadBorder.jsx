import React from 'react';
import Radium from 'radium';

const FourLineBorder = ({ customStyle }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      style={[styles.base, customStyle]}
    >
      <title>four-line-border</title>
      <rect x="2.5" y="2.5" width="495" height="495" />
      <rect x="12.5" y="12.5" width="475" height="475" />
      <rect x="22.5" y="22.5" width="455" height="455" />
      <rect x="32.5" y="32.5" width="435" height="435" />
    </svg>
  );
};

export default Radium(FourLineBorder);

const styles = {
  base: {
    fill: 'none',
    strokeMiterlimit: 10,
    strokeWidth: '2px',
  }
};
