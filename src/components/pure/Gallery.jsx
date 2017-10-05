import React from 'react';

import { LeftArrow, RightArrow } from '../../media/media.js';

import GalleryButton from './GalleryButton.jsx';
import Project from './Project.jsx';

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
          source={LeftArrow}
          handleClick={() => this.handleClick(Directions.backward)}
        />
        <GalleryButton
          injectedStyles={styles.rightButton}
          source={RightArrow}
          handleClick={() => this.handleClick(Directions.forward)}
        />
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
    gridColumn: '1'
  },
  rightButton: {
    gridRow: '2',
    gridColumn: '5'
  }
};
