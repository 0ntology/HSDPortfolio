import React from 'react';
import Radium from 'radium';

const About = ({src, txt}) => {
  return (
    <div style={styles.base}>
      <div style={styles.imageBox}>
        <img src={src} alt="HSD" style={styles.image} />
      </div>
      <div style={styles.textBox}>
        { txt }
      </div>
    </div>
  )
};

export default Radium(About);

const styles = {
  base: {
    height: '90vh',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
    padding: '16px',
    boxSizing: 'border-box',

    '@media (max-width: 500px)': {
      flexDirection: 'column'
    }
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  textBox: {
    flex: '2',
    fontFamily: 'Josefin Sans',
    padding: '16px',
    boxSizing: 'border-box'
  },
  imageBox: {
    flex: '1',
    padding: '16px',
    boxSizing: 'border-box'
  }
}
