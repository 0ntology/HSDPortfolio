import React from 'react';
import Radium from 'radium';

import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';

import Connected from 'components/common/hoc/Connected.jsx';

const RadiantLink = Radium(Link);

const Dropdown = ({config, isOpen, onToggle}) => {
  return isOpen && config.links.map((datum, i) => {
    const { label, destination } = datum;
    return (
      <RadiantLink key={label} to={destination} onClick={onToggle} style={styles.item(i)}>
        { label }
      </RadiantLink>
    )
  })
}

export default Radium(Connected(Keys.navigation)(Dropdown));

const styles = {
  item: (i) => ({
    position: 'absolute',
    top: `${(i * 27) + 70}px`,
    height: '27px',
    width: '100vw',
    paddingRight: '24px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    textAlign: 'right',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: 1.25,
    fontFamily: Fonts.body,

    color: Colors.black,
    backgroundColor: Colors.white,
  }),
}
