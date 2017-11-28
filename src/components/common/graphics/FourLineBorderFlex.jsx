import React from 'react';
import Radium from 'radium';

const Borders = ({ content, n }) =>
  <div style={styles.base}>
    { n ? <Borders content={content} n={(n - 1)} /> : content }
  </div>;

const Frame = ({ children, customStyle, n=3 }) =>
  <div style={[styles.container, customStyle]}>
    <Borders n={n-1} content={children} />
  </div>;

export default Radium(Frame);

const styles = {
  container: {
    height: '100%',
    width: '100%',

    padding: '4px',
    boxSizing: 'border-box',

    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'black',
  },
  base: {
    borderStyle: 'inherit',
    borderWidth: 'inherit',
    borderColor: 'inherit',

    height: '100%',
    width: '100%',
    padding: '4px',
    boxSizing: 'border-box',
  },
};
