import React from 'react';

import UI from 'constants/UI.js';
import Colors from 'constants/Colors.js';

import RightArrowIcon from 'components/common/svg/RightArrowIcon.jsx';
import LeftArrowIcon from 'components/common/svg/LeftArrowIcon.jsx';

const iconMap = {
  [UI.directions.forward]: RightArrowIcon,
  [UI.directions.backward]: LeftArrowIcon,
}

const ArrowButton = ({direction, handleClick}) => {
  return (
    <div onClick={() => handleClick(direction)} style={styles.base(direction)}>
      <ArrowIcon
        direction={direction}
        stroke={Colors.white}
      />
    </div>
  )
}

const ArrowIcon = ({ direction, stroke }) => {
  const Icon = iconMap[direction];

  return (
    <Icon stroke={stroke} />
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
