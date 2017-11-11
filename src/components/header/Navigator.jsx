/**
 * Navigator:
 *
 * An item for rendering links in the header.
 */
import React from 'react';
import Radium from 'radium';

import Keys from 'constants/Keys.js';
import Store from 'constants/Store.js';
import {
  link,
  flexItem,
  flexCenter,
  flexRow,
  text,
} from 'constants/Styles.js';

import Connect from 'components/common/hoc/Connected.jsx';
import RadiantLink from 'components/common/RadiantLink.jsx';

const NavigatorItem = ({label, destination}) =>
  <RadiantLink to={destination} style={styles.item}>
    { label }
  </RadiantLink>;

const Navigator = ({ config, current }) => {
  return (
    <div style={styles.container}>
      { config.map((datum, i) =>
          <NavigatorItem id={`Nav-Item-${i}`} {...datum} />
        )
      }
    </div>
  );
}

export default Radium(Connect(Keys.navigation)(Navigator));

const styles = {
  container: {
    ...flexItem,
    ...flexRow,
  },
  item: {
    ...link,
    ...text,
    ...flexItem,
    ...flexCenter,
    fontSize: '14pt'
  },
}
