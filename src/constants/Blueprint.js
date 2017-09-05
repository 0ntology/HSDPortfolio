const Blueprint = {
  grid: (w,h) => {
    return {
      height: '100%',
      width: '100%',
      display: 'grid',
      gridTemplateRows: `repeat(${h}, 1fr)`,
      gridTemplateColumns: `repeat(${w}, 1fr)`,
      boxSizing: 'border-box'
    };
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
};

export default Blueprint;
