// Redux.
import { applyMiddleware, createStore, compose } from 'redux'
import merge from 'lodash/merge'
// Redux Middleware.
// Allow function action creators.
import thunk from 'redux-thunk'

import {
  syncHistoryWithStore,
  createHistoryCache,
  historyMiddleware,
  makeHydratable,
  historyReducer,
  getInitState,
} from 'redux-history-sync'

// Socket.io linking
import io from 'socket.io-client'
import { middleware as createSocketMiddleware } from 'cape-redux-socket'
const location = 'http://edit.l.cape.io/'
const socket = createSocketMiddleware(io(location))

// Redux Reducers.
// Our reducer index.
import reducer, { defaultState } from './reducer'

// Custom api.
import api from './middleware/api'

// The redux state sidebar thing store enhancer.
import DevTools from '../containers/DevTools'

// Define the middeware we want to apply to the store.
const middleware = [
  api,
  thunk,
]

const calculatedState = {
  db: {
    currentYear: new Date().getFullYear(),
  },
  history: getInitState(window.location, window.document.title),
}

// Configure and create Redux store.
// Allow the function to accept an initialState object.
export default function configureStore(initialState) {
  const initState = merge(initialState, calculatedState, defaultState)
  const store = createStore(
    makeHydratable(reducer),
    initState,
    compose(
      applyMiddleware(...middleware),
      // Logger must be last middleware in chain(#20).
      // applyMiddleware(createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = makeHydratable(require('./reducer'))
      store.replaceReducer(nextRootReducer)
    })
  }
  syncHistoryWithStore(history, store)
  return store
}
