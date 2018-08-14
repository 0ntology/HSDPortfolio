import React from 'react';
import Radium from 'radium';

import Utils from 'utils/Utils.js';
import Colors from 'constants/Colors.js';
import Keys from 'constants/Keys.js';
import UI from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

import LeftArrowIcon from 'components/common/svg/LeftArrowIcon.jsx';
import { HoverlinkBox, IconBox, ImgBox, LinkBox } from 'components/common/box/Boxes.jsx';

/**
 * Boxes
 */
const BoxComponents = {
  [UI.boxTypes.hoverlink]: HoverlinkBox,
  [UI.boxTypes.img]: ImgBox,
  [UI.boxTypes.link]: LinkBox,
  [UI.boxTypes.icon]: IconBox,
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
const backItem = {
  type: UI.boxTypes.icon,
  link: Keys.portfolio.directory,
  icon: <LeftArrowIcon width="75px" height="75px" />
};

const Portfolio = ({ config, dimensions, location }) => {
  // determine if directory or location portfolio
  const { pathname } = location;
  const isDirectory = (pathname === '/portfolio') || (pathname === '/portfolio/');

  // fetch location portfolio data, or default directory data
  const { items } = !isDirectory ? config[pathname] : config[Keys.portfolio.directory];

  // if not on directory, add a back button
  const boxData = [...items];
  if (!isDirectory) {
    boxData.push(backItem)
  }

  // chunk that data into a number of columns
  const columnCount = isDirectory ? dimensions.columns : 1;
  const columnData = Utils.chunkColumns(columnCount)(boxData);

  return (
    <div id="PortfolioPage" style={styles.base}>
      <Columns
        sources={columnData}
        count={columnCount}
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
