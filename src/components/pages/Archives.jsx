import React from 'react';
import { map } from 'lodash';

import connected from 'components/common/hoc/Connected.jsx';
import Keys from 'constants/Keys.js';

const Archive = ({
  label,
  link,
  src
}) => (
  <div style={styles.item}>
    { label }
  </div>
);

const ArchiveList = ({
  archives
}) => map(
  archives,
  datum => <Archive key={`Archive-${datum.label}`} {...datum} />
);

const ArchivesPage = ({
  config: {
    archives
  }
}) => (
  <div style={styles.container}>
    <ArchiveList archives={archives} />
  </div>
);

export default connected(Keys.pages.archives)(ArchivesPage);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '4px',
  },
  item: {
    margin: '4px',
  }
}
