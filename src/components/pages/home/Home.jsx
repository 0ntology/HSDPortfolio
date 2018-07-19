import React from 'react';
import Dropbox from 'components/common/provider/Dropbox.jsx';
import UI from 'constants/UI.js';

export default function Home() {
  return (
    <Dropbox source={{path: '/projects/hsd-site'}}>
      { data =>
        <div style={styles.wrap}>
          { data.map(src => <div style={styles.photo(src)} />)}
        </div>
      }
    </Dropbox>
  )
}

const styles = {
  wrap: {
    height: `calc(100vh - ${UI.header.height})`,
    width: '100vw',
    padding: '0 8px 8px 8px',
    boxSizing: 'border-box',
  },
  photo: (src) => ({
    backgroundImage: `url("${src}")`,
  }),
};
