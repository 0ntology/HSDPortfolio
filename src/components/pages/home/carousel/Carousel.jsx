import React from 'react';
import { map } from 'lodash';

import UI from 'constants/UI.js';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import Reel from './CarouselReel.jsx';
import SwipeLayer from './SwipeLayer.jsx';
import Button from './CarouselButton.jsx';

/**
 * @class Carousel:
 * Display media in a carousel format, with touch and click controls.
 */
class Carousel extends React.Component {

  /*-<< initials >>-*/

  state = {
    selected: 0,
  };

  /*-<< handlers >>-*/

  _handleSelection = (direction) => {
    switch (direction) {

      case UI.directions.forward:
        this._increment();
        break;

      case UI.directions.backward:
        this._decrement();
        break;

      default:
        console.log(`[err] unknown carousel direction: ${direction}`)

    }
  };

  /*-<< Mutators >>-*/

  _increment = () => {
    const selected = (this.state.selected + 1) % this.props.media.length;

    this.setState({ selected });
  }

  _decrement = () => {
    const selected = (this.state.selected - 1 > 0) ? (this.state.selected - 1) : 0;

    this.setState({ selected });
  }

  /*-<< Rendering >>-*/

  render () {
    return ([
      <SwipeLayer key="Carousel-Controls" onSwipe={this._handleSelection}>
        { map(UI.directions, (direction) => (
            <Button
              key={direction}
              direction={direction}
              handleClick={this._handleSelection}
            />
        ))}
      </SwipeLayer>,
      <Reel
        key="Carousel-Reel"
        selected={this.state.selected}
        {...this.props}
      />
    ]);
  }
}

export default Dimensioned(Carousel);
