import React from 'react'

import UI from 'constants/UI.js'

export default function HeaderWrapper({ isOpen, columns, children }) {
  return (
    <div style={styles.root(columns, isOpen)}>
      { children }
    </div>
  )
}

const styles = {
  root: (columns, isOpen) => ({
    position: 'relative',
    height: UI.header.height,
    width: '100vw',
    zIndex: 1,

    padding: '0 16px',
    boxSizing: 'border-box',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateAreas: "'emblem fill menu'",
    gridGap: '16px',

    ...columns === 1 && {
      gridTemplateAreas: "'fill emblem menu' 'expandedMenu expandedMenu expandedMenu'",
      gridTemplateRows: "1fr auto",
      gridGap: isOpen ? '16px' : '0 16px',
    },

  })
  // root: {`
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',

  //   position: 'relative',
  //   height: UI.header.height,
  //   width: '100vw',
  //   zIndex: '1',

  //   boxSizing: 'border-box',

  //   fontFamily: Fonts.body,
  //   backgroundColor: 'whitee',
  //   color: Colors.black,
  // }
}