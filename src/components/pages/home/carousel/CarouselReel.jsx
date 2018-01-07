import React from 'react';

import Image from './CarouselImage.jsx';
import withMotion from './withCarouselMotion.jsx';

const Reel = ({position, dimensions, media}) => {
  return (
    <div style={styles.imageReel(dimensions, position)}>
      { media.map((medium) =>
          <Image
            key={medium}
            src={medium}
            dimensions={dimensions}
          />
      )}
    </div>
  )
}

export default withMotion(Reel);

const styles = {
  imageReel: (dimensions, position) => {
    return {
      position: 'relative',
      top: 0,
      left: `${(-(dimensions.width - 16) * position.x)}px`,
      height: '100%',
      width: '100%',
      
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }
};
