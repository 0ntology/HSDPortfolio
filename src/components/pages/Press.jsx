import React from 'react';
import Radium from 'radium';
import { chunk } from 'lodash';

import Colors from 'constants/Colors.js';
//import fourLineBorder from 'constants/assets/iconography/four-line-border.svg';

const PressCaption = ({txt, link}) =>
  <div style={styles.caption}>
    { txt }
  </div>;

const PressBox = ({src, link, txt}) =>
  <a href={link} key={link} style={styles.box}>
    <div style={styles.img(src)} />
    <PressCaption txt={txt} />
  </a>;

const PressColumn = (sources, index) =>
  <div key={`press-column-${index}`} style={styles.column}>
    { sources.map(PressBox) }
  </div>;

const Press = ({sources}) => {
  const columnSources = chunk(sources, Math.ceil(sources.length / 3));
  return (
    <div style={styles.base}>
      { columnSources.map(PressColumn) }
    </div>
  );
}

export default Radium(Press);

const styles = {
  base: {
    overflow: 'auto',
    height: '90vh',
    width: '100vw',
    padding: '16px',
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    '@media (max-width: 500px)': {
      flexDirection: 'column',
      alignItems: 'center'
    },
    backgroundColor: Colors.white
  },
  column: {
    boxSizing: 'border-box',
    flex: '1',
    padding: '8px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  /**
   * === press box ===
   **/
  box: {
    textDecoration: 'none',
    boxSizing: 'border-box',
    borderBottom: `10px double ${Colors.cream}`,
    backgroundColor: 'white',
    color: Colors.cream,
    width: '100%',
    height: '50vh',
    marginBottom: '16px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',

    transition: 'background-color 250ms ease, color 250ms ease, border-bottom 250ms ease',

    ':hover': {
      fontStyle: 'italic',
      backgroundColor: Colors.cream,
      color: Colors.white,
      borderBottom: `10px double ${Colors.white}`,
      transition: 'background-color 250ms ease, color 250ms ease, border-bottom 250ms ease',
    },
  },
  img: src => {
    return {
      flex: '6',
      backgroundImage: `url("${src}")`,
      backgroundSize: 'cover',
      height: '100%',
      width: '100%',
    }
  },
  caption: {
    flex: '1',
    width: '100%',
    fontSize: '1vmax',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
