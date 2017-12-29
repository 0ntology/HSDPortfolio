import React from 'react';

import Iconography from 'constants/Iconography.js';
import UI from 'constants/UI.js';
import Colors from 'constants/Colors.js';

const CarouselButton = ({columns, direction, handleClick}) => {
  const Icon = Iconography[direction];

  return (
    <div onClick={() => handleClick(direction)} style={styles.base(direction)}>
      <Icon {...styles.icon(columns)} />
    </div>
  )
}

export default CarouselButton;

const styles = {
  base: (direction) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: `flex-${direction === UI.directions.backward ? 'start' : 'end'}`,
  }),
  icon: (columns) => ({
    stroke: columns === 3 ? Colors.black : Colors.offWhite,
    height: '75px',
    width: '75px',
  })
};
