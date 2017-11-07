import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Colors from 'constants/Colors.js';
import Fonts from 'constants/Fonts.js';

const Logo = ({onNavigation}) =>
  <Link to="/home" style={styles.base}>
    Harry Schnaper
  </Link>;

export default Radium(Logo);

const styles = {
  base: {
    flex: '1',
    height: '50%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '32px',

    color: Colors.black,
    cursor: 'pointer',
    fontSize: '4vmin',
    fontFamily: Fonts.title,
    textDecoration: 'none',

    ':hover': {
      transform: 'scale(1.05)',
    }
  }
};
