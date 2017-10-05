import React from 'react';

import NavButton from './NavButton.jsx';

const NavButtons = ({config, handleClick}) => {

  return config.map((item) => <NavButton
                                key={item.label}
                                {...item}
                                handleClick={handleClick}
                              />);

};

export default NavButtons;
