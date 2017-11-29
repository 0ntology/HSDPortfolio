import React from 'react';
import Radium from 'radium';

import { chunkColumns } from 'utils/Utils.js';

import Colors from 'constants/Colors.js';
import Keys from 'constants/Keys.js';
import UI from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

import { HoverlinkBox, ImgBox, LinkBox } from 'components/common/Boxes.jsx';

/**
 * Boxes
 */
const BoxComponents = {
  [UI.boxTypes.hoverlink]: HoverlinkBox,
  [UI.boxTypes.img]: ImgBox,
  [UI.boxTypes.link]: LinkBox,
};

const Boxes = ({sources, count}) => sources.map(({type, ...props}, i) => {
  const Box = BoxComponents[type];
  return <Box key={`${type}-box-${i}`} cols={count} {...props} />;
});

/**
 * Columns
 */
const Columns = ({sources, count}) => sources.map((datum, i) =>
  <Column key={`portfolio-col-${i}`} sources={datum} count={count} />
);

const Column = ({sources, count}) =>
  <div style={styles.column}>
    <Boxes sources={sources} count={count} />
  </div>;

/**
 * Portfolio
 */
const Portfolio = ({
  config,
  dimensions: {columns},
  location: {pathname},
}) => {
  const items = config[pathname].items;

  return (
    <div style={styles.base}>
      <Columns
        sources={chunkColumns(columns)(items)}
        count={columns}
      />
    </div>
  );
}

export default Connect(Keys.pages.portfolio)(Dimensioned(Radium(Portfolio)));

const styles = {
  base: {
    backgroundColor: Colors.white,

    overflow: 'auto',
    height: `calc(100vh - ${UI.header.height})`,

    padding: '0 4px 0 4px',
    borderBottom: '8px solid white',
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  column: {
    boxSizing: 'border-box',
    flex: '1',
    margin: '0 4px 0 4px',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}
