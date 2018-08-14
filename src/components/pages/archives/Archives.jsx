import React from 'react';
import { map } from 'lodash';

import Colors from 'constants/Colors.js';
import Keys from 'constants/Keys.js';
import Ui from 'constants/UI.js';
import Utils from 'utils/Utils.js';

import dimensioned from 'components/common/hoc/Dimensioned.jsx';
import connected from 'components/common/hoc/Connected.jsx';

import BorderBox from 'components/common/box/BorderBox.jsx';

// an archive box
const Archive = ({
  columns,
  label,
  link,
  src,
  date,
  isLabel
}) => (
  <div key={`Archive-${label}`} style={styles.box(columns)}>
    <BorderBox>
      <div style={styles.content}>
        { isLabel ? (
          <div style={styles.labelImage(src)} />
        ) : (
          <a href={link} style={styles.boxWrap}>
            <div style={styles.image(src)} />
            <div style={styles.label}>{ label }</div>
            <div style={styles.label}>{ date }</div>
          </a>
        )}
      </div>
    </BorderBox>
  </div>
);

// a column of archives
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

// a group of columns of archives
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

// the archives page
const ArchivesPage = ({
  dimensions: {
    columns
  },
  config: {
    media
  }
}) => {
  return (
    <div style={styles.container}>
      <ArchiveColumns
        pools={Utils.chunkColumns(columns)(media)}
        columns={columns}
      />
    </div>
  )
};

export default connected(Keys.pages.archives)(dimensioned(ArchivesPage));

/**-<< styles >>-**/

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
    padding: '16px',
    boxSizing: 'border-box',

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
  boxWrap: {
    height: '100%',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',

    textDecoration: 'none',
  },
  image: src => ({
    height: '75%',
    width: '75%',
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }),
  label: {
    color: Colors.black,
    fontSize: '14pt',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
}
