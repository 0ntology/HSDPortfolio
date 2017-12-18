import React from 'react';
import Radium from 'radium';

const Inner = ({ content, n }) =>
  <div style={styles.base}>
    { n ? <Inner content={content} n={(n - 1)} /> : content }
  </div>;

const Outer = ({ children, customStyle, n=3 }) =>
  <div style={[styles.container, customStyle]}>
    <Inner n={n-1} content={children} />
  </div>;

export default Radium(Outer);

const styles = {
  container: {
    height: '100%',
    width: '100%',

    padding: '2px',
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
    padding: '2px',
    boxSizing: 'border-box',
  },
};
