import React from 'react';
import Radium from 'radium';

import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';

import Connected from 'components/common/hoc/Connected.jsx';

const RadiantLink = Radium(Link);

const Dropdown = ({config, isOpen, onToggle}) => {
  return isOpen && (
    <React.Fragment>
      <div style={styles.background(config.links.length)} />
      { config.links.map((datum, i) => {
          const { label, destination } = datum;
          return (
            <RadiantLink key={label} to={destination} onClick={onToggle} style={styles.item(i)}>
              { label }
            </RadiantLink>
          )
      })}
    </React.Fragment>
  )
}

export default Radium(Connected(Keys.navigation)(Dropdown));

const styles = {
  item: (i) => ({
    position: 'fixed',
    top: `${(i * 26) + 70}px`,
    left: 0,
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
    zIndex: '2000',
  }),
  background: (length) => ({
    position: 'fixed',
    top: `70px`,
    left: 0,
    height: `${length * 27}px`,
    width: '100vw',
    zIndex: '1000',
    background: Colors.white,
  })
}
