import React from 'react';
import Radium from 'radium';

const BorderBottomQuad = ({children, customStyles}) =>
  <div style={styles.base}>
    <div style={[styles.base, customStyles]}>
      { children }
    </div>
  </div>;


export default Radium(BorderBottomQuad);

const styles = {
  base: {
    height: '100%',
    width: '100%',
    paddingBottom: '1.25px',
    boxSizing: 'border-box',
    borderBottom: '4px double black'
  }
};
