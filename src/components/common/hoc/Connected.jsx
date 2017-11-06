import React from 'react';

import Store from 'constants/Store.js';

const Connect = key => (InnerComponent => (props => (
      <InnerComponent config={Store[key]} {...props} />
    )
  )
)

export default Connect;
