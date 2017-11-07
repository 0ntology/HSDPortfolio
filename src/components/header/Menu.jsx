import React from 'react';

import MenuButton from './MenuButton.jsx';

const MenuButtons = ({config, current}) => config.map((datum, i) =>
  <MenuButton
    key={`menu-button-${i}`}
    isCurrent={(current === datum.destination)}
    {...datum}
  />
);

const Menu = ({config, current}) =>
  <div style={styles.base}>
    <MenuButtons config={config} current={current} />
  </div>;

export default Menu;

const styles = {
  base: {
    width: '500px',
    height: '100%',
    marginRight: '16px',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}
