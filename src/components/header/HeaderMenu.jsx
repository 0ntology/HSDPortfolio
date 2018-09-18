import React from 'react'

import InlineNav from 'components/header/cells/InlineNav.jsx'

export default function HeaderMenu({ columns, isOpen }) {
  return (
    <div style={styles.root(columns, isOpen)}>
      { columns === 1 ? <div>menu</div> : <InlineNav /> }
    </div>
  )
}

const styles = {
  root: (columns, isOpen) => ({
    gridArea: 'menu',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
    ...columns === 1 && isOpen && {
      gridArea: 'expandedMenu'
    },
  })
}