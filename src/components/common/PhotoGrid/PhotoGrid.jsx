import React from 'react';
import UI from 'constants/UI.js';

export default function PhotoGrid({ children }) {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        { children }
      </div>
    </div>
  )
}

const styles = {
  page: {
    height: `calc(100vh - ${UI.header.height})`,
    width: '100vw',
    padding: '0 8px 8px 8px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gridGap: '8px',
    height: '90vmin',
    width: '90vmin',
  }
}