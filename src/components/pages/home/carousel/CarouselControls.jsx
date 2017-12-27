import React from 'react';
import { map } from 'lodash';

import UI from 'constants/UI.js';

import Button from './CarouselButton.jsx';

/**
 * @class ControlLayer: The control layer of the carousel.
 *  Controls the selected image by recognizing touch gestures and displaying
 *  buttons.
 *
 */
const Controls = ({onTouchStart, onTouchEnd, onClick}) => (
  <div
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    style={styles.imageControls}
  >
    <Buttons onClick={onClick} />
  </div>
)

const Buttons = ({onClick}) => map(UI.directions, (direction) => (
  <Button
    key={direction}
    direction={direction}
    handleClick={onClick}
  />
))

export default Controls;

const styles = {
  imageControls: {
    position: 'absolute',
    left: 0,
    top: UI.header.height,

    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 500,
  }
}
