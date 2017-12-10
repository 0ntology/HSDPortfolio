import React from 'react';

const QuadImage = ({ media }) =>
  <div style={styles.quadContainer}>
    <div style={styles.quadColumn}>
      <div style={styles.quadImage(media[0])}/>
      <div style={styles.quadImage(media[1])}/>
    </div>
    <div style={styles.quadColumn}>
      <div style={styles.quadImage(media[2])}/>
      <div style={styles.quadImage(media[3])}/>
    </div>
  </div>;

export default QuadImage;

const styles = {
  quadContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50vw',
    height: '50vw',
    maxHeight: '50vh',
    maxWidth: '50vh'
  },
  quadColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%'
  },
  quadImage: (src) => ({
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50%',
    width: '100%',
    border: `4px solid white`,
    boxSizing: 'border-box',
  }),
};
