import React from 'react';
import { Motion, spring } from 'react-motion';

/** -<< withCarouselMotion >>- **/
/**
 * Gives position to a carousel component.
 *
 **/
const withMotion = (Component) => ({selected, ...props}) => {
  const initialCondition = {x: 0};
  const trajectory = {x: spring(selected, {stiffness: 150, damping: 33})};

  return (
    <Motion defaultStyle={initialCondition} style={trajectory}>
      { (position) => (
          <Component position={position} {...props} />
      )}
    </Motion>
  );
}

export default withMotion;
