import React from 'react';

import UI from 'constants/UI'
import Dropbox from 'components/common/provider/Dropbox.jsx'

export default function Home({ data, dimension }) {
  return (
    <HomeGrid dimension={dimension}>
      <HomePhotos data={data} />
    </HomeGrid>
  )
}

function HomeGrid({ children, dimension }) {
  return (
    <div style={styles.container}>
      { children }
    </div>
  )
}

function HomePhotos({ data }) {
  return data.map((file, i) =>
    <div style={styles.item(file)} key={`dropbox-home-item-${i}`} />
  )
}

const styles = {
  container: {
    // height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(45vh, 1fr))',
    gridAutoRows: 'minmax(45vh, 250px)',
    gridGap: '16px',
    padding: '0 16px 16px 16px',
    boxSizing: 'border-box',
  },
  item: src => ({
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%'
  })
}