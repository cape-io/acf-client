import { compose, combineReducers, createStore } from 'redux'

// The redux state sidebar thing store enhancer.
import DevTools from '../containers/DevTools'

export default function createStoreDev(reducer, initState, middleware) {
  const store = createStore(
    reducer,
    initState,
    compose(
      middleware,
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
  return store
}
