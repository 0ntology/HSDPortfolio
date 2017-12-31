import React from 'react';
import Radium from 'radium';

import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import Styles from 'constants/Styles.js';

import Connected from 'components/common/hoc/Connected.jsx';

const RadiantLink = Radium(Link);

const DropdownItem = ({label, destination}) =>
  <RadiantLink
    to={destination}
    style={styles.item}
  >
    { label }
  </RadiantLink>;

const Dropdown = ({config, handleToggle}) =>
  <div onClick={handleToggle} style={styles.container}>
    { config.links.map((datum, i) =>
        <DropdownItem
          key={`dd-item-${i}`}
          {...datum}
        />
      )
    }
  </div>

export default Connected(Keys.navigation)(Dropdown);

const styles = {
  container: {
    position: 'absolute',
    top: '70px',
    backgroundColor: 'white',

    zIndex: '500',
    padding: '8px',
    boxSizing: 'border-box',
    width: '100vw',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  item: {
    padding: '4px 0px 8px 4px',
    boxSizing: 'border-box',
    width: '100%',
    fontFamily: Fonts.body,
    textAlign: 'right',
    ...Styles.link
  }

}
