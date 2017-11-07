import React from 'react';

import Row from 'components/common/structural/Row.jsx';
import Button from './MenuButton.jsx';

const IconButton = ({children, expanded, onExpand}) =>
  <div onClick={() => onExpand(!expanded)} style={styles.menuIconButton}>
    { children }
  </div>;

const MenuButtons = ({config, current}) => config.map((datum, i) =>
  <Button
    key={`mini-menu-button-${i}`}
    isCurrent={(current === datum.destination)}
    {...datum}
  />
);

const MiniMenu = ({config, current, expanded, onExpand}) =>
  <Row customStyles={styles.menuStyles}>
    <MenuButtons config={config} current={current}/>
    <IconButton expanded={expanded} onExpand={onExpand}>
      { `${expanded ? 'Back' : 'Menu'}` }
    </IconButton>
  </Row>;

export default MiniMenu;

const styles = {
  menuStyles: {
    justifyContent: 'space-between',
    fontSize: '2.5vmin',
  },
  menuIconButton: {
    flex: '1',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    cursor: 'pointer'
  }
}
