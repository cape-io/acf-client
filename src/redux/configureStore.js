// Redux.
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import merge from 'lodash/merge'
// Allow function action creators.
import thunk from 'redux-thunk'

import {
  createHistoryCache,
  getInitState,
  historyMiddleware,
  syncHistoryWithStore,
  // makeHydratable,
} from 'redux-history-sync'
// Create an object with two methods. getKeyStore and saveKeyStore.
const historyCache = createHistoryCache()

// Socket.io linking
import io from 'socket.io-client'
import { middleware as createSocketMiddleware } from 'cape-redux-socket'
const location = process.env.SOCKET_LOC || ''
const socket = createSocketMiddleware(io(location))

// Redux Reducers.
// Our reducer index.
import * as reducer from './reducer'
import defaultState from './defaultState'

// The redux state sidebar thing store enhancer.
import DevTools from '../containers/DevTools'

// Define the middeware we want to apply to the store.
const middleware = [
  historyMiddleware(window.history, historyCache),
  socket,
  thunk,
]

// Configure and create Redux store.
// Function requires an initialState object.
export default function configureStore(initialState) {
  const calculatedState = {
    db: {
      currentYear: new Date().getFullYear(),
    },
    history: getInitState(window.location, window.document.title),
  }
  const initState = merge(initialState, calculatedState, defaultState)
  const store = createStore(
    combineReducers(reducer),
    initState,
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    )
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = combineReducers(require('./reducer'))
      store.replaceReducer(nextRootReducer)
    })
  }
  syncHistoryWithStore(store, window, historyCache)
  return store
}
