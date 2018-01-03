import React from 'react';
import utils from 'utils/Utils.js';

const Dimensioned = (DimensionedChild) => {
  return class extends React.Component {
    state = {
      height: '0',
      width: '0',
      columns: 1,
      viewport: {
        vw: 0,
        vh: 0,
        vmin: 0,
        vmax: 0,
      }
    };

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        columns: utils.calcCols(window.innerWidth),
        viewport: {
          vw: window.innerWidth,
          vh: window.innerHeight,
          vmin: Math.min(window.innerHeight, window.innerWidth),
          vmax: Math.max(window.innerHeight, window.innerWidth),
        },
      });
    }

    render() {
      return (
        <DimensionedChild dimensions={this.state} {...this.props} />
      );
    }
  }
}

export default Dimensioned;
