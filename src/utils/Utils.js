import Keys from 'constants/Keys.js';
import UI from 'constants/UI.js';

export default class Utils {
  static calcScreen(width) {
    return ((width < UI.screens.small.width) && Keys.screens.small)
      || ((width < UI.screens.medium.width) && Keys.screens.medium)
      || Keys.screens.large;
  }

  static calcCols(width) {
    const screenKey = Utils.calcScreen(width);
    return UI.screens[screenKey].columns;
  }

  static chunkColumns(n) {
    return (items) => {
      let chunks = Array(n);

      items.forEach((el, i) => {
        chunks[i % n]
          ? chunks[i % n].push(el)
          : chunks[i % n] = [el];
      });
    
      return chunks;
    }
  }
}
