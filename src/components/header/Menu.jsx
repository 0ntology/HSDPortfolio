import React from 'react';

import Row from 'components/common/structural/Row.jsx';
import Button from './Button.jsx';

const Buttons = ({config, current}) => config.map((datum, i) =>
  <Button
    key={`menu-button-${i}`}
    isCurrent={(current === datum.destination)}
    {...datum}
  />
);

const Menu = ({config, current}) =>
  <Row>
    <Buttons config={config} current={current} />
  </Row>;

export default Menu;
