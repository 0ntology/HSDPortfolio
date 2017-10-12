import React from 'react';

import NavButton from './NavButton.jsx';

const NavButtons = ({config, handleClick}) => {
  return config.map((item) => {
    <NavButton
      {...item}
      key={item.label}
      handleNavigation={handleClick}
    />
  });
};

export default NavButtons;
