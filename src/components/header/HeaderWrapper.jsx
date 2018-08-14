import React from 'react'

import UI from 'constants/UI.js'
import Fonts from 'constants/Fonts.js'
import Colors from 'constants/Colors.js'

export default function HeaderWrapper({ columns, children }) {
  return (
    <div style={styles.root(columns)}>
      { children }
    </div>
  )
}

const styles = {
  root: (columns) => ({
    position: 'relative',
    height: UI.header.height,
    width: '100vw',
    zIndex: 1,

    padding: '0 16px',
    boxSizing: 'border-box',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '16px',
    gridTemplateAreas: "'emblem fill menu'",

    ...columns === 1 && {
      gridTemplateAreas: "'fill emblem menu' 'expandedMenu expandedMenu expandedMenu'"
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