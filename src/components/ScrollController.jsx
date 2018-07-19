import { Component } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Control scroll position upon route updates.
 *
 */
export default withRouter(class ScrollController extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.props.location.pathname.includes('portfolio')) {
        const portfolio = document.getElementById("PortfolioPage");
        if (portfolio) {
          portfolio.scrollTop = 0;
        }
      }
    }
  }

  render() {
    return this.props.children
  }
});