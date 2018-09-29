import React from 'react'
import Path from 'components/common/provider/Path.jsx'
import Dimension from 'components/common/provider/Dimension.jsx'
import Toggle from 'components/common/provider/Toggle.jsx'

export default function HeaderProvider({ children }) {
  return (
    <Path>
      { (location) =>
        <Dimension>
          { ({ columns }) =>
            <Toggle>
              { (isOpen, onToggle) =>
                children({location, columns, isOpen, onToggle})
              }
            </Toggle>
          }
        </Dimension>
      }
    </Path>
  )
}