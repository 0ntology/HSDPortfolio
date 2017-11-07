import React from 'react';
import Radium from 'radium';
import { chunk } from 'lodash';

import Keys from 'constants/Keys.js';
import Colors from 'constants/Colors.js';

import Connect from 'components/common/hoc/Connected.jsx';

/**
 * Boxes
 */
const Boxes = ({sources}) => sources.map((datum, i) =>
  <Box key={i} {...datum} />
);

const Box = ({src, link, txt}) =>
  <div key={link} style={styles.img(src)} />;

/**
 * Columns
 */
const Columns = ({sources}) => sources.map((datum, i) =>
  <Column key={`portfolio-col-${i}`} sources={datum} />
);

const Column = ({sources}) =>
  <div style={styles.column}>
    <Boxes sources={sources} />
  </div>;

/**
 * Portfolio
 */
const Portfolio = ({config: {media}}) =>
  <div style={styles.base}>
    <Columns sources={chunk(media, 3)} />
  </div>;

export default Radium(Connect(Keys.portfolio)(Portfolio));

const styles = {
  base: {
    backgroundColor: Colors.white,

    overflow: 'auto',
    height: '90vh',
    width: '100vw',
    padding: '16px',
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    '@media (maxWidth: 500px)': {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  column: {
    boxSizing: 'border-box',
    flex: '1',
    padding: '8px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  img: src => {
    return {
      backgroundImage: `url("${src}")`,
      backgroundSize: 'cover',
      height: 'calc(100vh / 3)',
      width: '100%'
    }
  },
}
