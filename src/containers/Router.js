import React, { PropTypes } from 'react'

import About from './About'
import Contribute from './Contribute'
import Loading from '../components/Loading'
import Member from './Member'
import Members from './Members'
import NotFound from './NotFound'

const routeIndex = {
  about: About,
  contribute: Contribute,
  loading: Loading,
  member: Member,
  members: Members,
  notFound: NotFound,
}

function Router(props) {
  const { routeId } = props
  const MainElement = routeIndex[routeId] || routeIndex.notFound
  return <MainElement {...props} />
}

Router.propTypes = {
  routeId: PropTypes.string.isRequired,
}
export default Router
