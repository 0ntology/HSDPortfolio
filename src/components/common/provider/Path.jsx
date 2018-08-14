import React from 'react'

import { withRouter } from 'react-router-dom';

export default withRouter(function Path({ children, location }) {
  return children(location);
})