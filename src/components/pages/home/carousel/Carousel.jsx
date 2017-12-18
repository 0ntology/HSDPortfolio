import React from 'react';
import { Motion, spring } from 'react-motion';

import UI from 'constants/UI.js';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

import RightArrowIcon from 'components/common/graphics/RightArrowIcon.jsx';
import LeftArrowIcon from 'components/common/graphics/LeftArrowIcon.jsx';

import ArrowButton from './CarouselButton.jsx';
import Image from './CarouselImage.jsx';

const Controls = ({handleClick}) => {
  return (
    <div style={styles.imageControls}>
      <ArrowButton
        handleClick={() => handleClick(UI.directions.backward)}
        injectedStyles={{justifyContent: 'flex-start'}}
      >
        <LeftArrowIcon />
      </ArrowButton>
      <ArrowButton
        handleClick={() => handleClick(UI.directions.forward)}
        injectedStyles={{justifyContent: 'flex-end'}}
      >
        <RightArrowIcon />
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
            { config.map(
                src => (
                  <Image
                    key={src}
                    src={src}
                    customStyles={styles.image}
                  />
                )
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
      left: `${(-(dimensions.width - 16) * position.x)}px`,
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  image: {
    width: 'calc(100vw - 16px)',
    marginRight: '8px',
    height: '100%'
  },
  imageControls: {
    position: 'absolute',
    top: '50%',
    width: 'calc(100% - 16px)',
    height: '15vh',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 500,
  }
};
