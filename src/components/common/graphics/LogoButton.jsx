import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Colors from 'constants/Colors.js';
import Fonts from 'constants/Fonts.js';

const Logo = ({onNavigation}) =>
  <Link to="/home">
    <div style={styles.base}>
      <div style={styles.text}>
        Harry Schnaper
      </div>
    </div>
  </Link>;
  
export default Radium(Logo);

const styles = {
  base: {
    flex: '1',
    height: '50%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '32px'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  text: {
    fontSize: '5vmin',
    fontFamily: Fonts.title,
    cursor: 'pointer',
    color: Colors.black,
    ':hover': {
      transform: 'scale(1.05)',
    }
  }
};
