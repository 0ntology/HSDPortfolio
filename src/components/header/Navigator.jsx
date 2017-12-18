import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';
import Styles from 'constants/Styles.js';

import Connect from 'components/common/hoc/Connected.jsx';

const RadiantLink = Radium(Link);

const NavigatorItem = ({ label, destination }) =>
  <RadiantLink to={destination} style={styles.item}>
    { label }
  </RadiantLink>;

const Navigator = ({ config: { links }, current }) => {
  return (
    <div style={styles.container}>
      { links.map((datum, i) =>
          <NavigatorItem key={`Nav-Item-${i}`} {...datum} />
        )
      }
    </div>
  );
}

export default Radium(Connect(Keys.navigation)(Navigator));

const styles = {
  container: {
    ...Styles.flexItem,
    ...Styles.flexRow,
    justifyContent: 'space-around',
  },
  item: {
    ...Styles.link,
    ...Styles.text,
    ...Styles.flexCenter,
    fontSize: '14pt',
    textTransform: 'uppercase',
    letterSpacing: 2
  },
}
