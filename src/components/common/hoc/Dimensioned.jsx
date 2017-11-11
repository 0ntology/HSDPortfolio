import React from 'react';
import styleUtils from 'utils/StyleUtils.js';

const Dimensioned = (DimensionedChild) => {
  return class extends React.Component {
    state = {
      height: '0',
      width: '0',
      columns: 0
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
        columns: styleUtils.calcCols(window.innerWidth)
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
