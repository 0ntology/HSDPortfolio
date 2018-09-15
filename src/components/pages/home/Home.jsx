import React from 'react';

/**
 * `url("${file}")`
 */
export default class HomeCarousel extends React.PureComponent {

  state = {
    index: 0
  }

  increment = () => this.setState(({ index }) => ({
    index: (index + 1) % this.props.data.length
  }))

  decrement = () => this.setState(({ index }) => ({
    index: index
      ? (index - 1) % this.props.data.length
      : this.props.data.length - 1
  }))

  render() {
    return (
      <div className="Home">
        <div onClick={this.decrement} className="Home-Button">
          <svg viewBox="0 0 150 150">
            <polyline className="Arrow-Line" points="106 107 106 140 40.5 74.5 107 7.5 108 42" />
            <polyline className="Arrow-Line" points="89 62.5 97 54.5 97.25 54.42 96.62 32.89 55.11 74.71 96 115.6 96 95 96 94.5 89 87.5" />
            <circle className="Arrow-Circle" cx="78.5" cy="74" r="4.5" />
          </svg>
        </div>
        <div className="Home-Reel" style={{left: `calc(-${this.state.index} * 100vw)`}}>
          { this.props.data.map((file, i) =>
            <div
              key={`home-photo-${i}`}
              className="Home-Reel-Item"
              style={{background: 'aquamarine', filter: `hue-rotate(${i * 100}deg)`}}
            />
          )}
        </div>
        <div onClick={this.increment} className="Home-Button">
          <svg viewBox="0 0 150 150">
            <polyline className="Arrow-Line" points="42.5 107 42.5 140 108 74.5 41.5 7.5 40.5 42" />
            <polyline className="Arrow-Line" points="59.5 62.5 51.5 54.5 51.25 54.42 51.88 32.89 93.39 74.71 52.5 115.6 52.5 95 52.5 94.5 59.5 87.5" />
            <circle className="Arrow-Circle" cx="70" cy="74" r="4.5" />
          </svg>
        </div>
      </div>
    )
  }
}