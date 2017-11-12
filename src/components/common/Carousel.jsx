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
            { config.map((source) =>
                <Image key={source.title} {...source} customStyles={styles.image} />
              )
            }
          </div>
      }
    </Motion>
  );
}

const Carousel = ({handleClick, ...rest}) => {
  return [
    <Controls key={'carousel'} handleClick={handleClick} />,
    <Reel key={'reel'} {...rest} />
  ];
}

export default Dimensioned(Carousel);

const styles = {
  base: {
    height: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  imageReel: (dimensions, position) => {
    return {
      position: 'relative',
      top: 0,
      left: `${(-(dimensions.width - 8) * position.x)}px`,
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  image: {
    width: '100vw',
    height: '100%'
  },
  imageControls: {
    position: 'absolute',
    top: '45%',
    width: 'calc(100% - 16px)',
    height: '15vh',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 500,
  },
  arrow: {
    stroke: 'rgb(255,255,255)', // rgba(255, 255, 255, 0.67),
    width: '25%',
    height: '100%'
  }
};
