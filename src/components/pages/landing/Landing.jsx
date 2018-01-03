import React from 'react';
import Radium from 'radium';

import Colors from 'constants/Colors.js';
import Fonts from 'constants/Fonts.js';
import Keys from 'constants/Keys.js';
import UI from 'constants/UI.js';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import Hoverable from 'components/common/hoc/Hoverable.jsx';
import Connect from 'components/common/hoc/Connected.jsx';

import SwipeLink from './SwipeLink.jsx';
import QuadBorderBox from 'components/common/svg/QuadBorder.jsx';

// ->> Sub Components
const BlurredBox = Radium(({src, hover, viewport}) =>
  <div style={styles.blurredBox(src, hover, viewport)} />
);

const EmblemBox = Radium(({content, hoverRef, viewport}) =>
  <div ref={hoverRef} style={styles.emblemBox(viewport)}>
    { content }
  </div>
);

const BackgroundPane = Radium(({src, hover}) =>
  <div style={styles.background(src, hover)} />
);

const BackgroundBorder = () =>
  <div style={styles.backgroundBorder} />

// ->> Root Component
const Landing = ({config, hover, hoverRef, dimensions}) => {
  const { media } = config;
  const { viewport } = dimensions;

  return (
    <SwipeLink to="/home" style={styles.container}>
      <BackgroundPane hover={hover}  src={media} />
      <BackgroundBorder />
      <BlurredBox hover={hover}  src={media} viewport={viewport} />
      <EmblemBox content="HS" hoverRef={hoverRef} viewport={viewport} />
      <QuadBorderBox customStyle={styles.quadBorderBox(viewport)} />
    </SwipeLink>
  )
}

export default Hoverable(Connect(Keys.pages.landing)(Radium(Dimensioned(Landing))));

/** Styles **/
const BOXSIZE = `50vmin`;
const BOXTOP = ({vh, vmin}) => `${(vh / 2) - (vmin / 4)}px`;
const BOXLEFT = ({vw, vmin}) => `${(vw / 2) - (vmin / 4)}px`;

const styles = {
  container: {
    display: 'block',
    height: '100vh',
    width: '100%',
    boxSizing: 'border-box',
  },
  background: (src, hover) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',

    background: `url("${src}") no-repeat`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    transition: 'filter 1s ease',
    filter: hover ? 'blur(8px)' : 'none',
  }),
  backgroundBorder: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    border: `${UI.spacing/2}px solid white`,
    boxSizing: 'border-box',
  },
  // ->> Boxes
  blurredBox: (src, hover, viewport) => ({
    position: 'absolute',

    top: BOXTOP(viewport),
    left: BOXLEFT(viewport),
    height: BOXSIZE,
    width: BOXSIZE,

    background: `url("${src}") no-repeat fixed`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    transition: 'filter .75s ease-out',
    filter: hover ? `blur(0px) grayscale(100%)` : 'blur(15px) grayscale(0%)',
  }),
  emblemBox: (viewport) => ({
    position: 'absolute',

    top: BOXTOP(viewport),
    left: BOXLEFT(viewport),
    height: BOXSIZE,
    width: BOXSIZE,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: Colors.white,
    fontSize: '10vmin',
    fontFamily: Fonts.title,

    zIndex: 500
  }),
  quadBorderBox: (viewport) => ({
    position: 'absolute',

    top: BOXTOP(viewport),
    left: BOXLEFT(viewport),
    height: BOXSIZE,
    width: BOXSIZE,

    stroke: 'white',
    strokeWidth: '4px',
  }),
}
