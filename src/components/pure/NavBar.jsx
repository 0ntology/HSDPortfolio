import React from 'react';

const NavBar = ({ children }) => {
  return (
    <div style={styles.base}>
      { children }
    </div>
  );
};

export default NavBar;

const styles = {
  base: {
    gridColumn: '5 / 9',

    height: '100%',
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '10px',
    boxSizing: 'border-box'
  }
}
