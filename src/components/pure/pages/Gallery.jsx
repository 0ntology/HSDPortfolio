import React from 'react';

import GalleryButton from 'components/pure/buttons/GalleryButton.jsx';
import Project from 'components/pure/graphics/Project.jsx';

import LeftArrowIcon from 'components/pure/graphics/LeftArrowIcon.jsx';
import RightArrowIcon from 'components/pure/graphics/RightArrowIcon.jsx';

const Directions = {
  forward: 1,
  backward: -1
};

export default class Gallery extends React.Component {
  state = {
    selected: 0
  };

  handleClick = (increment) => {
    const {sources} = this.props;
    const {selected} = this.state;
    const newSelection = ( selected + increment ) % sources.length;

    this.setState({
      // handle looping through projects
      selected: (newSelection >= 0) ? newSelection : sources.length - 1
    });
  };

  render() {
    const {sources} = this.props;
    const {selected} = this.state;

    return (
      <div style={styles.base}>
        <Project
          injectedStyles={styles.project}
          {...sources[selected]}
        />
        <GalleryButton
          injectedStyles={styles.leftButton}
          handleClick={() => this.handleClick(Directions.backward)}
        >
          <LeftArrowIcon {...styles.arrow} />
        </GalleryButton>
        <GalleryButton
          injectedStyles={styles.rightButton}
          handleClick={() => this.handleClick(Directions.forward)}
        >
          <RightArrowIcon {...styles.arrow} />
        </GalleryButton>
      </div>
    );
  }
}

const styles = {
  base: {
    gridRow: '2 / 9',
    gridColumn: '1 / 9',

    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)'
  },
  project: {
    gridRow: '1 / 4',
    gridColumn: '1 / 6'
  },
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
