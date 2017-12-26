import React from 'react';

import UI from 'constants/UI.js';

import RightArrowIcon from 'components/common/svg/RightArrowIcon.jsx';
import LeftArrowIcon from 'components/common/svg/LeftArrowIcon.jsx';

const iconMap = {
  [UI.directions.forward]: RightArrowIcon,
  [UI.directions.backward]: LeftArrowIcon,
}

const ArrowButton = ({direction, handleClick, style}) => {
  return (
    <div onClick={() => handleClick(direction)} style={styles.base(direction)}>
      <ArrowIcon direction={direction} style={style} />
    </div>
  )
}

const ArrowIcon = ({ direction, style }) => {
  const Icon = iconMap[direction];
  return (
    <Icon {...style} />
  )
}

export default ArrowButton;

const styles = {
  base: (direction) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: `flex-${direction === UI.directions.backward ? 'start' : 'end'}`,
  })
};
