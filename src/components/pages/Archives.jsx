import React from 'react';
import { map } from 'lodash';

import { chunkColumns } from 'utils/Utils.js';
import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import Ui from 'constants/UI.js';

import dimensioned from 'components/common/hoc/Dimensioned.jsx';
import connected from 'components/common/hoc/Connected.jsx';
import FourLineBorder from 'components/common/graphics/FourLineBorderFlex.jsx';
import ADEmblem from 'constants/assets/ad-emblem.png';

const Archive = ({
  columns,
  label,
  link,
  src,
  date,
  isLabel
}) => (
  <div key={`Archive-${label}`} style={styles.box(columns)}>
    <FourLineBorder>
      <div style={styles.content}>
        { isLabel ? (
          <div style={styles.labelImage(src)} />
        ) : (
          <a href={link} style={styles.link}>
            <div style={styles.image(src)} />
            <div style={styles.label}>{ label }</div>
            <div style={styles.label}>{ date }</div>
          </a>
        )}
      </div>
    </FourLineBorder>
  </div>
);

const ArchiveColumn = ({pool, index, columns}) => (
  <div style={styles.column}>
    { map(pool, (datum, i) => (
        <Archive
          key={`Archive-Column-${i}`}
          columns={columns}
          {...datum}
        />
      )
    )}
  </div>
);

const ArchiveColumns = ({ pools, columns }) => map(
  pools,
  (pool, i) => (
    <ArchiveColumn
      key={`Archive-Column-${i}`}
      index={i}
      pool={pool}
      columns={columns}
    />
  )
);

const ArchivesPage = ({
  dimensions: {
    columns
  },
  config: {
    media
  }
}) => {
  const items = [{src: ADEmblem, isLabel: true}, ...media];
  return (
    <div style={styles.container}>
      <ArchiveColumns
        pools={chunkColumns(columns)(items)}
        columns={columns}
      />
    </div>
  )
};

export default connected(Keys.pages.archives)(dimensioned(ArchivesPage));

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',

    overflow: 'auto',
    height: `calc(100vh - ${Ui.header.height})`,

    padding: '0 4px 0 4px',
    borderBottom: '8px solid white',
    boxSizing: 'border-box',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  box: columns => ({
    height: `calc(100vw / ${columns})`,
    padding: '4px',
    boxSizing: 'border-box',
  }),
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelImage: src => ({
    height: '50%',
    width: '50%',
    backgroundImage: `url("${src}")`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }),
  image: src => ({
    height: '75%',
    width: '75%',
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginBottom: '16px',
  }),
  label: {
    fontSize: '14pt',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  link: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none'
  }
}
