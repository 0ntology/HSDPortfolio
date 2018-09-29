import React from 'react';
import Radium from 'radium';

import UI from 'constants/UI.js';
import skyline from 'constants/assets/skyline.jpg';

import Hover from 'components/common/provider/Hover.jsx';
import Dimension from 'components/common/provider/Dimension.jsx';
import SwipeLink from 'components/common/SwipeLink.jsx';
import QuadBorderBox from 'components/common/svg/QuadBorder.jsx';
import EmblemIcon from 'components/common/svg/EmblemIcon.jsx';

/**
 * The HSD Landing Page.
 * @returns { Component }
 */
export default Radium(function LandingPage() {
  return (
    <Dimension>
      { ({viewport}) =>
        <Hover>
          { (isHovered, hoverRef) =>
            <SwipeLink to="/home" style={styles.container}>
              <div style={styles.background(skyline, isHovered)} />
              <div style={styles.backgroundBorder} />
              <div style={styles.blurredBox(skyline, isHovered, viewport)} />
              <div ref={hoverRef} style={styles.emblemBox(viewport)}>
                <EmblemIcon style={styles.emblem} />
              </div>
              <QuadBorderBox customStyle={styles.quadBorderBox(viewport)} />
            </SwipeLink>
          }
        </Hover>
      }
    </Dimension>
  )
})

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

    backgroundImage: `url("${src}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
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

    backgroundImage: `url("${src}")`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',

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
    padding: '32px',
    boxSizing: 'border-box',
    zIndex: 500,
  }),
  emblem: {
    stroke: 'white',
    fill: 'white',
    height: '100%',
  },
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
