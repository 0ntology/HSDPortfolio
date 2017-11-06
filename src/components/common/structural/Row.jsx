import React from 'react';
import Radium from 'radium';

const Row = ({ children, customStyles }) =>
  <div style={[styles.base, customStyles]}>
    { children }
  </div>;

export default Radium(Row);

const styles = {
  base: {
    flex: '1',
    height: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginRight: '32px',
    boxSizing: 'border-box'
  }
}
