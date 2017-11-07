import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

const MenuButton = ({label, isCurrent, destination}) =>
  <Link to={destination} style={styles.base(isCurrent)}>
    { label }
  </Link>;

export default Radium(MenuButton);

const styles = {
  base: isCurrent => {
    return {
      height: '100%',
      flex: '1',
      cursor: 'pointer',
      textDecoration: 'none',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      fontSize: '14px',
      fontWeight: '300',
      fontStyle: `${isCurrent ? 'italic' : 'normal'}`,

      ':hover': {
        transform: 'scale(1.1)',
        fontStyle: 'italic',
      }
    }
  }
};
