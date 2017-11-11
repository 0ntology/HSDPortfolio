import React from 'react';
import Radium from 'radium';
import { chunk } from 'lodash';

import styleUtils from 'utils/StyleUtils.js';

import Keys from 'constants/Keys.js';
import Colors from 'constants/Colors.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

/**
 * Boxes
 */
const Boxes = ({sources, count}) => sources.map((Box, i) =>
  <Box />
);

/**
 * Columns
 */
const Columns = ({sources, count}) => sources.map((datum, i) =>
  <Column key={`grid-col-${i}`} sources={datum} count={count} />
);

const Column = ({sources, count}) =>
  <div style={styles.column}>
    <Boxes sources={sources} count={count} />
  </div>;

/**
 * Grid:
 * @param {Array<Component>} Cells
 * @return {Component} Cells arranged in a container
 */
const Grid = (Cells) => {
  return class Organized extends Component {
    render() {
      <div>
        { Cells }
      </div>
    }
  }
}

export default Dimensioned(Radium(Grid));

const styles = {
  base: {
    backgroundColor: Colors.white,

    overflow: 'auto',
    height: 'calc(100vh - 55px)',
    width: '100%',

    padding: '0 4px 0 4px',
    marginTop: '-8px',
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
    margin: '4px 4px 0 4px',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: (src, cols) => {
    return {
      backgroundImage: `url("${src}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: '4px',
      width: '100%',
      height: `calc((100vw / ${cols}) - (8px * ${cols})`
    }
  },
}
