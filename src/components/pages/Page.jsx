import React from 'react'
import UI from 'constants/UI.js'

export default function Page({ children }) {
  return (
    <div style={styles.root}>
      { children }
    </div>
  )
}

const styles = {
  root: {
    overflow: 'auto',
    height: `calc(100vh - ${UI.header.height})`
  }
}