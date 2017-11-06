import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

//import Colors from 'constants/Colors.js';

const NavButton = ({label, isCurrent, destination}) =>
  <Link to={destination} style={styles.base(isCurrent)}>
    <div style={styles.label(isCurrent)}>
      { label }
    </div>
  </Link>;

export default Radium(NavButton);

const styles = {
  base: isCurrent => {
    return {
      flex: '1',
      height: '100%',
      cursor: 'pointer',
      //backgroundColor: `${isCurrent ? Colors.cream : Colors.white}`,
    }
  },
  label: isCurrent => {
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      height: '100%',
      width: '100%',

      fontSize: '2.5vmin',
      fontWeight: '300',
      fontStyle: `${isCurrent ? 'italic' : 'normal'}`,

      ':hover': {
        transform: 'scale(1.1)',
        fontStyle: 'italic',
      }
    }
  }
};
