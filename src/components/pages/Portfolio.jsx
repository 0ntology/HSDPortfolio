import React from 'react';
import Radium from 'radium';
import { chunk } from 'lodash';

import Keys from 'constants/Keys.js';
import Colors from 'constants/Colors.js';
import { SmallScreen, MediumScreen, LargeScreen } from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

/**
 * Utils
 */

const isSmall = width => (width < SmallScreen.width) && SmallScreen.columns;
const isMedium = width => (width < MediumScreen.width) && MediumScreen.columns;
const isLarge = width => (width < LargeScreen.width) && LargeScreen.columns;

const calcRows = width => isSmall(width)
    || isMedium(width)
    || isLarge(width)
    || 3;

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
const Portfolio = Dimensioned(({config: {media}, dimensions: {width}}) => {
  const colCount = calcRows(width);
  const colSize = Math.ceil(media.length / colCount);

  return (
    <div style={styles.base}>
      <Columns sources={chunk(media, colSize)} />
    </div>
  )
});

export default Radium(Connect(Keys.portfolio)(Portfolio));

const styles = {
  base: {
    backgroundColor: Colors.white,

    overflow: 'auto',
    height: 'calc(100vh - 55px)',
    width: '100%',
    padding: '4px',
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
    margin: '4px',
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
      width: '100%',
      margin: '4px',

    }
  },
}
