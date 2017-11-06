import React from 'react';
import Radium from 'radium';

const BorderQuad = ({children, customStyles}) =>
  <div style={styles.base}>
    <div style={[styles.base, customStyles]}>
      { children }
    </div>
  </div>;


export default Radium(BorderQuad);

const styles = {
  base: {
    height: '100%',
    width: '100%',
    padding: '1.25px',
    boxSizing: 'border-box',
    border: '4px double black'
  }
};
