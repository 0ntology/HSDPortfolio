import React from 'react';
import Radium from 'radium';
//import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';

import Hoverable from 'components/common/hoc/Hoverable.jsx';
import Connect from 'components/common/hoc/Connected.jsx';

import Colors from 'constants/Colors.js';

import FourLineBorder from 'components/common/graphics/FourLineBorder.jsx';

const BackgroundPane = ({src}) => <div style={styles.background(src)} />;
const BlurredPane = ({src}) => <div style={styles.blurred(src)} />;
const Emblem = ({content}) => <div style={styles.initial}>{ content }</div>;

const FixedLanding = ({config}) => {
  const src = config.media[0].src;
  return (
    <div style={styles.container}>
      <BackgroundPane src={src} />
      <BlurredPane src={src} />
      <Emblem content="HS" />
      <FourLineBorder customStyle={styles.border} />
    </div>
  )
}

export default Hoverable(Connect(Keys.landing)(Radium(FixedLanding)));

const MARGIN = 8;
const BOXSIZE = `50vmin`;
const BOXTOP = `(100vh - ${BOXSIZE}) / 2`;
const BOXLEFT = `(100vw - ${BOXSIZE}) / 2`;

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    padding: `${MARGIN}px`,
    boxSizing: 'border-box',
  },
  background: src => ({
    position: 'absolute',
    height: `calc(100% - ${2 * MARGIN}px)`,
    width: `calc(100% - ${2 * MARGIN}px)`,

    background: `url("${src}") no-repeat`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    // transition: 'filter 1s ease',
    // filter: hover ? 'blur(8px) contrast(1) saturate(1.5) invert(0.1)' : 'none',
  }),
  blurred: src => ({
    position: 'absolute',
    top: `calc(${BOXTOP})`,
    left: `calc(${BOXLEFT})`,

    height: `calc(${BOXSIZE})`,
    width: `calc(${BOXSIZE})`,

    background: `url("${src}") no-repeat fixed`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    //     transition: 'filter .75s ease-out',
    //     filter: `blur(${hover ? '0px' : '15px'})`,
  }),
  initial: {
    position: 'absolute',
    top: `calc(${BOXTOP})`,
    left: `calc(${BOXLEFT})`,

    height: `calc(${BOXSIZE})`,
    width: `calc(${BOXSIZE})`,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: Colors.white,
    fontSize: '10vmin',
    fontFamily: Fonts.title,
  },
  border: {
    position: 'absolute',
    top: `calc(${BOXTOP})`,
    left: `calc(${BOXLEFT})`,

    height: `calc(${BOXSIZE})`,
    width: `calc(${BOXSIZE})`,

    stroke: 'white',
    strokeWidth: '4px',
    zIndex: 200,
  }
}
