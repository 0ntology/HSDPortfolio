import React from 'react'

import PhotoCell from 'components/common/PhotoGrid/PhotoCell.jsx'

export default function PhotoCells({ sources }) {
  return sources.map((source) => <PhotoCell source={source} />)
}