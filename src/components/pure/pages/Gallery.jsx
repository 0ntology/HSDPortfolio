import React from 'react';
import { Motion, spring } from 'react-motion';

import Dimensioned from 'components/meta/Dimensioned.jsx';
import GalleryButton from 'components/pure/buttons/GalleryButton.jsx';
import LeftArrowIcon from 'components/pure/graphics/LeftArrowIcon.jsx';
import RightArrowIcon from 'components/pure/graphics/RightArrowIcon.jsx';
import Project from 'components/pure/graphics/Project.jsx';

const Directions = {
  forward: 1,
  backward: -1
};

export default class Gallery extends React.Component {
  state = {
    selected: 0
  };

  handleClick = increment => {
    const {selected} = this.state;
    const {sources} = this.props;
    const newSelection = ( selected + increment ) % sources.length;

    this.setState({
      selected: newSelection >= 0 ? newSelection : sources.length - 1
    });
  };

  render() {
    const {selected} = this.state;
    const {sources} = this.props;

    return (
      <div style={styles.base}>
        <ImageReel selected={selected} sources={sources} />
        <ImageControls
          left={selected}
          right={(sources.length - selected - 1)}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
};

const ImageControls = ({left, right, handleClick}) => {
  return (
    <div style={styles.imageControls}>
      <GalleryButton
        enabled={left}
        handleClick={() => handleClick(Directions.backward)}
        injectedStyles={{justifyContent: 'flex-start'}}
      >
        <LeftArrowIcon {...styles.arrow} />
      </GalleryButton>
      <GalleryButton
        enabled={right}
        handleClick={() => handleClick(Directions.forward)}
        injectedStyles={{justifyContent: 'flex-end'}}
      >
        <RightArrowIcon {...styles.arrow} />
      </GalleryButton>
    </div>
  );
};

const Reel = ({dimensions, selected, sources}) => {
  const initialCondition = {x: 0};
  const trajectory = {x: spring(selected, {stiffness: 150, damping: 33})};
  return (
    <Motion defaultStyle={initialCondition} style={trajectory}>
      { position =>
          <div style={styles.imageReel(dimensions, position)}>
            { sources.map((source) => <Project key={source.title} {...source} /> )}
          </div>
      }
    </Motion>
  );
}

const ImageReel = Dimensioned(Reel);

const styles = {
  base: {
    position: 'fixed',
    top: '75px',
    width: '100vw',
    height: '90vh',
    boxSizing: 'border-box'
  },
  imageReel: (dimensions, position) => {
    return {
      position: 'absolute',
      left: `${-dimensions.width * position.x}px`,
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      width: '100%'
    }
  },
  imageControls: {
    position: 'absolute',
    top: '40%',
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
  }
};
