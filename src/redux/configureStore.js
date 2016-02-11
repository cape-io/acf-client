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
  getInitState,
} from 'redux-history-sync'

// Socket.io linking
import io from 'socket.io-client'
import { middleware as createSocketMiddleware } from 'cape-redux-socket'
const location = 'http://edit.l.cape.io/'

// Redux Reducers.
// Our reducer index.
import reducer, { defaultState } from './reducer'
// Custom api.
import api from './middleware/api'

// The redux state sidebar thing store enhancer.
import DevTools from '../containers/DevTools'

const historyCache = createHistoryCache()
// Define the middeware we want to apply to the store.
const middleware = [
  api,
  historyMiddleware(window.history, historyCache),
  createSocketMiddleware(io(location)),
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
  syncHistoryWithStore(store, window, historyCache)
  console.log(store.getState())
  return store
}
