import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';

import { Media } from 'media/media.js';

import Project from '../pure/graphics/Project.jsx';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.initialCondition = [
      {left: 0},
      {left: 1},
      {left: 2}
    ];

    this.state = {
      pointer: 0,
      frames: null
    };
  }

  componentWillReceiveProps({selected: newSelected}) {
    const {selected} = this.state
    if (newProps.selected !== this.)
  }

  move = direction => {
    this.setState({
      pointer: this.state.pointer + direction
    });
  }

  trajectory = positions => positions.map((_, i) =>
    i === 0
      ? {left: this.state.pointer * -1}
      : {left: positions[i-1].x + 1}
  );

  render() {
    const {sources} = this.props;
    return (
      <StaggeredMotion
        defaultStyles={this.initialCondition}
        styles={this.trajectory}
      >
        { (position) =>  <PositionedProjects position={position} sources={sources} /> }
      </StaggeredMotion>
    );
  }
}

const PositionedProjects = ({position, sources, trigger}) => {
  return sources.map((source, idx) => {
    return (
      <Project key={idx} {...source} {...position} />
    );
  });
}

export default Carousel;
