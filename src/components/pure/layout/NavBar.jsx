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
    height: '100%',
    width: '50%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '8px',
    marginRight: '32px',
    boxSizing: 'border-box'
  }
}
