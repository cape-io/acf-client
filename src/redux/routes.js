import createRouter from 'location-info'
import { selectActiveKeyDefault } from 'redux-history-sync'

/**
 * Please keep routes in order of importance/processing.
 */
const router = createRouter({ trailingSlash: false })
router.addRoute('home', '/')
router.addRoute('members', '/members')
router.addRoute('member', '/members/(:id)')
router.addRoutes([
  'about',
  'contribute',
])

// Feel free to implement this any way you like.
// The point is to pass in the state object and return some info about a "route".
function getRouteInfo(state) {
  // We are using the redux-history-sync to put location into state.
  // selectActiveKeyDefault() is a helper function to grab the current location info.
  // It basically does this state.history.key[state.history.activeKey]
  const history = selectActiveKeyDefault(state)
  // Location object gets sent to locationInfo
  const route = router.locationInfo(history.location)
  return {
    history,
    route,
  }
}

export default getRouteInfo
