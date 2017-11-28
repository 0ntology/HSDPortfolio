import { keyBy, map, values } from 'lodash';
import { defaultKeyHandler } from 'utils/Utils.js';

import Keys from 'constants/Keys.js';
import Media from 'constants/Media.js';
import Text from 'constants/Text.js';
import Routes from 'constants/Routes.js';
import UI from 'constants/UI.js';

// Component configurations
const Store = {
  [Keys.components.navigation]: map(Keys.destinations,
    key => ({
     label: Text[key],
     destination: Routes[key],
  })),
  [Keys.pages.home]: {
    media: map(
      Keys.feeds[Keys.pages.home],
      key => Media[key]
    )
  },
  [Keys.pages.about]: {
    media: Media.portrait,
    txt: {
      body: Text.testament
    }
  },
  [Keys.pages.contact]: {
    media: Media[Keys.pages.contact]
  },
  [Keys.pages.portfolio]: new Proxy(
    keyBy(
      map(
        Keys.portfolio,
        containerKey => ({
          key: containerKey,
          items: map(
            Keys.feeds[containerKey],
            (key, index) => ({
              src: Media[key],
              link: containerKey === Keys.portfolio.directory ? Routes[key] : Keys.portfolio.directory,
              label: Text[key],
              type: UI.getBoxType(containerKey, index)
            })
          )
        })
      ),
      'key'
    ),
    defaultKeyHandler(Keys.portfolio.directory)
  ),
  [Keys.pages.landing]: {
    src: Media[Keys.pages.landing]
  },
  [Keys.pages.archives]: {
    label: Text[Keys.pages.archives].label,
    archives: map(values(Keys.archives),
      key => ({
        label: Text[key],
        src: Media[key],
        link: Routes[key]
      })
    )
  },
};

export default Store;
