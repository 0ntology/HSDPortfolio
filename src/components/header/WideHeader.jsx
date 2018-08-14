import React from 'react';

import InlineNav from './cells/InlineNav.jsx';
import EmblemIcon from 'components/common/svg/EmblemIcon.jsx';
import EmblemCell from './cells/EmblemCell.jsx'
import Cell from './cells/Cell.jsx'

const WideHeader = () => {
  return (
    <React.Fragment>
      <EmblemCell>
        <EmblemIcon style={styles.emblem} />
      </EmblemCell>
      <Cell />
      <Cell>
        <InlineNav key="Wide-Header-Nav" />
      </Cell>
    </React.Fragment>
  )
}

export default WideHeader;

const styles = {
  emblem: {
    height: '100%',
    maxWidth: '100%'
  }
};
