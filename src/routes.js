import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
  App,
  About,
  Member,
  Members,
  NotFound,
  Contribute,
    // UserPage,
  } from './containers'

/**
 * Please keep routes in alphabetical order
 */
export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={About} />
      { /* Routes */ }
      <Route path="about" component={About} />
      <Route path="members" component={Members} />
      <Route path="members/:id" component={Member} />
      <Route path="contribute" component={Contribute} />
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
