import React from 'react';
import { StaggeredMotion } from 'react-motion';

import Media from 'media/media.js';
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

  handleClick = (increment) => {
    const {selected} = this.state;
    const {sources} = this.props;
    const newSelection = ( selected + increment ) % sources.length;

    this.setState({
      //TODO: disabled arrows make this no longer applicable
      // handle looping through projects
      selected: (newSelection >= 0) ? newSelection : sources.length - 1
    });
  };

  render() {
    const {selected} = this.state;
    const {sources} = this.props;

    return (
      <div style={styles.base}>
        <ProjectReel selected={selected} sources={sources} />
        { selected && <GalleryButton
            enabled={selected}
            handleClick={() => this.handleClick(Directions.backward)}
            injectedStyles={styles.leftButton}
          >
            <LeftArrowIcon {...styles.arrow} />
          </GalleryButton>
        }
        { (sources.length - selected - 1) && <GalleryButton
            enabled={(sources.length - selected - 1)}
            handleClick={() => this.handleClick(Directions.forward)}
            injectedStyles={styles.rightButton}
          >
            <RightArrowIcon {...styles.arrow} />
          </GalleryButton>
        }
      </div>
    );
  }
}

const ProjectReel = ({selected, sources}) => {
  const defaults = [
    {x: 0},
    {x: 1},
    {x: 2}
  ]
  return (
    <StaggeredMotion
      defaultStyles={defaults}
      styles={position => position.map((_, i) => {
        return i === 0
          ? {x: -selected}
          : {x: position[i-1].x}
      })}
    >
      { ({x}) => <Project x={x} /> }
    </StaggeredMotion>
  )
}

const styles = {
  base: {
    gridRow: '2 / 9',
    gridColumn: '1 / 9',

    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)'
  },
  /*
  project: {
    gridRow: '1 / 4',
    gridColumn: '1 / 6'
  },
  project: ({x}) => {
    return {
      left:
    };
  },*/
  leftButton: {
    gridRow: '2',
    gridColumn: '1',
    justifyContent: 'flex-start'
  },
  rightButton: {
    gridRow: '2',
    gridColumn: '5',
    justifyContent: 'flex-end'
  },
  arrow: {
    stroke: 'rgba(255, 255, 255, 0.67)',
    width: '50%',
    height: '50%'
  }
};
