import React from 'react';
import Radium from 'radium';
import { pick } from 'lodash';

import styleUtils from 'utils/StyleUtils.js';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';
import { flexRow } from 'constants/Styles.js';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

import Navigator from 'components/header/Navigator.jsx';
import Initial from 'components/header/Initial.jsx';
import Title from 'components/header/Title.jsx';
import Fill from 'components/header/Fill.jsx';

const { navigator, initial, title, fill, mini } = Keys;

const points = {
  [Keys.navigator]: {
    Comp: Navigator,
    profile: ['config', 'current'],
  },
  [Keys.initial]: {
    Comp: Initial,
    profile: [],
  },
  [Keys.title]: {
    Comp: Title,
    profile: [],
  },
  [Keys.fill]: {
    Comp: Fill,
    profile: []
  },
};

const space = [
  [fill, initial, fill],
  [title, navigator],
  [title, fill, navigator],
];

const Header = ({dimensions: {width}, ...props}) => {
  const cols = styleUtils.calcCols(width);
  const position = space[(cols-1)];

  return (
    <div style={styles.base}>
      { position.map((key, i) => {
          const { Comp, profile } = points[key];
          return <Comp key={`${key}-${i}`} {...pick(props, profile)} />;
        })
      }
    </div>
  );
}

export default Dimensioned(Radium(Header));

const styles = {
  base: {
    ...flexRow,
    position: 'relative',
    zIndex: '1',
    padding: '4px 0 4px 0',
    height: '70px',
    width: '100vw',
    boxSizing: 'border-box',

    fontFamily: Fonts.body,
    backgroundColor: 'white',
    color: Colors.black,
  },
};
