import React from 'react';
import utils from 'utils/Utils.js';

const Dimensioned = (DimensionedChild) => {
  return class extends React.Component {
    state = {
      height: '0',
      width: '0',
      columns: 1
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
        columns: utils.calcCols(window.innerWidth)
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
