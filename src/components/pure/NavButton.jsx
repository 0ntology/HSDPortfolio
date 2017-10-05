import React from 'react';

const NavButton = ({label, link, handleNavigation}) => {
  return (
    <div onClick={(e) => handleNavigation(link)}>
      <div style={styles.label}>
        { label }
      </div>
    </div>
  );
};

export default NavButton;

const styles = {
  label: {
    fontSize: '2vmin',
    fontWeight: '300'
  }
};
