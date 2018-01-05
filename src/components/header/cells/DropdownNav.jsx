import React from 'react';
import Radium from 'radium';

import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import UI from 'constants/UI.js';
import Colors from 'constants/Colors.js';

import Connected from 'components/common/hoc/Connected.jsx';

const RadiantLink = Radium(Link);

const Dropdown = ({config, isOpen, onToggle}) => {
  return isOpen && (
    <div onClick={onToggle} style={styles.container}>
      { config.links.map((datum, i) =>
          <RadiantLink
            key={datum.label}
            to={datum.destination}
            style={styles.item}
          >
            { datum.label }
          </RadiantLink>
        )
      }
    </div>
  )
}

export default Radium(Connected(Keys.navigation)(Dropdown));

const styles = {
  container: {
    position: 'absolute',
    top: UI.header.height,
    width: '100vw',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'end',

    backgroundColor: 'white',
  },
  item: {
    margin: '4px 20px',
    boxSizing: 'border-box',
    height: '27px',
    fontFamily: Fonts.body,
    textAlign: 'right',

    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: 1.25,
    color: Colors.black,
    cursor: 'pointer'
  }

}
