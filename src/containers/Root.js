import React, { PropTypes } from 'react'
// Component makes Redux store available to the connect() calls in children.
import { Provider } from 'react-redux'

import App from './App'
import DevTools from './DevTools'
import ErrorMessage from './ErrorMessage'

export default function Root({ store }) {
  // Provider only wants a single child.
  return (
    <Provider store={store}>
      <div>
        <ErrorMessage />
        <App />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
