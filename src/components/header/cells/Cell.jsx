import React from 'react'

export default function Cell({ children, style }) {
  return (
    <div style={{...styles.root, ...style}}>
      { children }
    </div>
  )
}

const styles = {
  flex: 1,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}