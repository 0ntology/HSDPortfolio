import React from 'react'

import Dimension from 'components/common/provider/Dimension.jsx'
import Dropbox from 'components/common/provider/Dropbox.jsx'
import UI from 'constants/UI.js'
import Home from './Home.jsx'

export default function HomeContainer() {
  return (
    // <Dropbox source={UI.dropboxSources.home}>
    //   { (data) =>
        <Dimension>
          { (dimension) => <Home data={[1,2,3,4,5,6,7,8]} dimension={dimension} /> }
        </Dimension>
    //   }
    // </Dropbox>
  )
}