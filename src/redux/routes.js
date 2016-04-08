import createRouter from 'location-info'
import { selectActiveKeyDefault } from 'redux-history-sync'
import { createSelector } from 'reselect'
import { parse } from 'query-string'
/**
 * Please keep routes in order of importance/processing.
 */
const router = createRouter({ parseSearch: parse, trailingSlash: false })
const { addRoute, addRoutes, locationInfo } = router
addRoute('home', '/')
addRoute('members', '/members')
addRoute('member', '/members/(:id)')
addRoutes([
  'about',
  'contribute',
])

// We are using the redux-history-sync to put location into state.
function routeSelector(history) {
  if (!history) return history
  return {
    history,
    // Location object gets sent to locationInfo
    route: locationInfo(history.location),
  }
}

export { locationInfo }

// Pass in the state object and return some info about a "route".
// selectActiveKeyDefault() is a helper function to grab the current location info.
export default createSelector(selectActiveKeyDefault, routeSelector)
