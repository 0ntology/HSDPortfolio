import React from 'react';
import { Motion, spring } from 'react-motion';

import { Directions } from 'constants/UI.js';

import ArrowButton from 'components/common/ArrowButton.jsx';
import RightArrowIcon from 'components/common/graphics/RightArrowIcon.jsx';
import LeftArrowIcon from 'components/common/graphics/LeftArrowIcon.jsx';
import Image from 'components/common/graphics/Image.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

const Controls = ({handleClick}) => {
  return (
    <div style={styles.imageControls}>
      <ArrowButton
        handleClick={() => handleClick(Directions.backward)}
        injectedStyles={{justifyContent: 'flex-start'}}
      >
        <LeftArrowIcon {...styles.arrow} />
      </ArrowButton>
      <ArrowButton
        handleClick={() => handleClick(Directions.forward)}
        injectedStyles={{justifyContent: 'flex-end'}}
      >
        <RightArrowIcon {...styles.arrow} />
      </ArrowButton>
    </div>
  );
};

const Reel = ({dimensions, config, selected, handleClick}) => {
  const initialCondition = {x: 0};
  const trajectory = {x: spring(selected, {stiffness: 150, damping: 33})};

  return (
    <Motion defaultStyle={initialCondition} style={trajectory}>
      { position =>
          <div style={styles.imageReel(dimensions, position)}>
            { config.map((source) => <Image key={source.title} {...source} customStyles={styles.image} /> )}
          </div>
      }
    </Motion>
  );
}

const Carousel = ({handleClick, ...rest}) => {
  return [
    <Controls handleClick={handleClick} />,
    <Reel {...rest} />
  ];
}

export default Dimensioned(Carousel);

const styles = {
  base: {
    width: '100%',
    height: '90vh',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  imageReel: (dimensions, position) => {
    return {
      position: 'relative',
      left: `${-dimensions.width * position.x}px`,
      display: 'flex',
      flexDirection: 'row',
      height: '90vh',
      width: '100%'
    }
  },
  imageControls: {
    position: 'absolute',
    top: '45vh',
    width: '100%',
    height: '15vh',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  arrow: {
    stroke: 'rgba(255, 255, 255, 0.67)',
    width: '25%',
    height: '100%'
  },
  image: {
    width: '100vw',
    height: '100%'
  }
};
