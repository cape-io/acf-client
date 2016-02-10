import createRouter from 'location-info'

/**
 * Please keep routes in order of importance/processing.
 */
export default function createRoutes({}) {
  const router = createRouter()
  router.makeRoute('home', '/')
  router.makeRoute('about', '/about')
  router.makeRoute('contribute', '/contribute')
  router.makeRoute('members', '/member')
  router.makeRoute('member', '/member/(:id)')
  return router
}
