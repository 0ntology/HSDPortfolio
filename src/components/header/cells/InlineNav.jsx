import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';
import Styles from 'constants/Styles.js';

import Connect from 'components/common/hoc/Connected.jsx';

const RadiantLink = Radium(Link);

const Navigator = ({ config: { links } }) => {
  return (
    <div style={styles.container}>
      { links.map((datum, i) =>
          <RadiantLink
            key={`Nav-Item-${i}`}
            to={datum.destination}
            style={styles.item}
          >
            { datum.label }
          </RadiantLink>
      )}
    </div>
  );
}

export default Radium(Connect(Keys.navigation)(Navigator));

const styles = {
  container: {
    ...Styles.flexRow,
    justifyContent: 'space-around',
    width: '100%'
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
