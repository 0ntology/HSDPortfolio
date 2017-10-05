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
      selected: (newSelection >= 0) ? newSelection : sources.length - 1
    });
  };

  render() {
    const {sources} = this.props;
    const {selected} = this.state;

    return (
      <div style={styles.base}>
        <GalleryButton
          source ={LeftArrow}
          handleClick={() => this.handleClick(Directions.backward)}
        />
        <Project {...sources[selected]} />
        <GalleryButton
          source ={RightArrow}
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

    height: '100%',
    width: '100%',
  }
};
