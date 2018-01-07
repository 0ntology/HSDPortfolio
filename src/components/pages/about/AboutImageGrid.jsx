import React from 'react';

const QuadImage = ({ media, style }) =>
  <div style={{...styles.container, ...style}}>
    <div style={styles.quadColumn}>
      <div style={styles.quadImage(media[0])} />
      <div style={styles.quadImage(media[1])} />
    </div>
    <div style={styles.quadColumn}>
      <div style={styles.quadImage(media[2])} />
      <div style={styles.quadImage(media[3])} />
    </div>
  </div>;

export default QuadImage;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: '0 0 auto',
  },
  quadColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%'
  },
  quadImage: (src) => ({
    flex: 1,
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'border-box',
    border: `4px solid white`,
    boxSizing: 'border-box',
  }),
};
