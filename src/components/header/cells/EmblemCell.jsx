import React from 'react'

import Cell from './Cell.jsx'

export default function EmblemCell({ children }) {
  return (
    <Cell style={styles.root}>
      { children }
    </Cell>
  )
}

const styles = {
  root: {
    padding: '16px 32px',
    boxSizing: 'border-box',
    justifyContent: 'flex-start',
  }
}