import React from 'react';
import Radium from 'radium';

import Path from 'components/common/provider/Path.jsx'
import Dimension from 'components/common/provider/Dimension.jsx'
import Toggle from 'components/common/provider/Toggle.jsx'

import HeaderWrapper from './HeaderWrapper.jsx'
import HeaderEmblem from './HeaderEmblem.jsx'
import HeaderMenu from './HeaderMenu.jsx'

export default Radium(function Header() {
  return (
    <Path>
      { (location) =>
        <Dimension>
          { ({ columns }) =>
            <Toggle>
              { (isOpen, onToggle) => location.pathname !== '/' &&
                <HeaderWrapper columns={columns}>
                  <HeaderEmblem columns={columns} />
                  <HeaderMenu columns={columns} onToggle={onToggle} isOpen={isOpen} />
                </HeaderWrapper>
              }
            </Toggle>
          }
        </Dimension>
      }
    </Path>
  )
})