import React from 'react'

export default function HeaderEmblem({ columns }) {
  return (
    <div style={styles.root}>
      { columns === 1 ? 'HS' : 'HARRY SCHNAPER'}
    </div>
  )
}

const styles = {
  root: {
    gridArea: 'emblem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'BurlingtonCenter',
    textTransform: 'uppercase',
    fontSize: '2.5vw',
    padding: '12px 0 0 8px',
    boxSizing: 'border-box',
  }
}