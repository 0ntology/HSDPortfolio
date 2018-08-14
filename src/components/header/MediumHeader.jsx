import React from 'react';

import InlineNav from './cells/InlineNav.jsx';
import EmblemIcon from 'components/common/svg/EmblemIcon.jsx';
import EmblemCell from './cells/EmblemCell.jsx'
import Cell from './cells/Cell.jsx'
import Styles from '../../constants/Styles';

const MediumHeader = () => {
  return (
    <React.Fragment>
      <EmblemCell>
        <EmblemIcon style={Styles.svgFill} />
      </EmblemCell>
      <Cell>
        <InlineNav key="Medium-Header-Nav"/>
      </Cell>
    </React.Fragment>
  )
}

export default MediumHeader;

const styles = {
  item: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emblemContainer: {
    padding: '16px 32px',
    boxSizing: 'border-box',
    justifyContent: 'flex-start',
  },
  emblem: {
    height: '100%',
    maxWidth: '100%'
  }
}