import React from 'react';

import Radium from 'radium';
import { Link } from 'react-router-dom';

import Fonts from 'constants/Fonts.js';
import Styles from 'constants/Styles.js';

import DropdownNav from './cells/DropdownNav.jsx';

const RadiantLink = Radium(Link);

const SmallHeader = ({ isOpen, onToggle }) => {
  return (
    <React.Fragment>
      <div style={styles.item} />
      <RadiantLink to="/home" style={{...styles.item, ...styles.initial}}>
        HS
      </RadiantLink>
      <div onClick={onToggle} style={{...styles.item, ...styles.toggle}}>
        { isOpen ? 'close' : 'menu' }
      </div>
      <DropdownNav isOpen={isOpen} onToggle={onToggle} />
    </React.Fragment>
  )
}

export default SmallHeader;

const styles = {
  item: {
    flex: 1,
    height: '100%',
    margin: '0px 4px',
  },
  toggle: {
    fontSize: '14pt',
    fontFamily: Fonts.body,
    paddingRight: '8px',
    textTransform: 'uppercase',
    letterSpacing: 1.25,
    ...Styles.link,
    ...Styles.flexRight
  },
  initial: {
    fontSize: '22pt',
    fontFamily: Fonts.title,
    ...Styles.link,
    ...Styles.flexCenter
  }
};
