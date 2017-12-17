import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const LeftArrowIcon = ({stroke, strokeWidth, width, height}) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      width={width}
      height={height}
      style={styles.base(stroke, strokeWidth)}
    >
      <title>
        left_arrow
      </title>
      <polyline
        points="106 107 106 140 40.5 74.5 107 7.5 108 42"
      />
      <polyline
        points="89 62.5 97 54.5 97.25 54.42 96.62 32.89 55.11 74.71 96 115.6 96 95 96 94.5 89 87.5"
      />
      <circle
        cx="78.5"
        cy="74"
        r="4.5"
      />
    </svg>
  );
};

LeftArrowIcon.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

LeftArrowIcon.defaultProps = {
  stroke: 'black',
  strokeWidth: '2px',
  width: '25%',
  height: '100%',
};

export default Radium(LeftArrowIcon);

const styles = {
  base: (stroke, strokeWidth) => {
    return {
      fill: 'none',
      stroke: `${stroke}`,
      strokeMiterlimit: 10,
      strokeWidth: `${strokeWidth}`,
      ':hover': {
        transform: 'scale(1.05)',
      }
    }
  }
};
