import React from 'react'

export default function PhotoCell({ source }) {
  return (
    <div style={styles.container}>
      <div style={styles.photo(source)} />
    </div>
  )
}

const styles = {
  container: {
  },
  photo: src => ({
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%'
  })
}