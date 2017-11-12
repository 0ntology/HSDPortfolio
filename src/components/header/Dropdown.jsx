import React from 'react';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import { link } from 'constants/Styles.js';

import Connected from 'components/common/hoc/Connected.jsx';
import RadiantLink from 'components/common/RadiantLink.jsx';

const DropdownItem = ({label, destination}) =>
  <RadiantLink
    to={destination}
    style={styles.item}
  >
    { label }
  </RadiantLink>;

const Dropdown = ({config, handleToggle}) =>
  <div onClick={handleToggle} style={styles.container}>
    { config.map((datum, i) =>
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
    width: 'calc(100% - 16px)',

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
    ...link
  }

}
