import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadMembers } from '../redux/actions'
import getRouteInfo from '../redux/routes'

// import Header from '../components/Header/Header'
// <Header navLinks={navLinks} styles={{}} title={title} />
import Router from './Router'

class App extends Component {
  render() {
    const { navLinks, route, title } = this.props
    return (
      <div id="wrapper">
        <Router {...route} />
      </div>
    )
  }
}

App.propTypes = {
  loadMembers: PropTypes.func.isRequired,
  navLinks: PropTypes.array.isRequired,
  route: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  const {
    db: { navLinks, support, title, image, description },
  } = state
  return {
    description,
    image,
    route: getRouteInfo(state),
    navLinks,
    support,
    title,
  }
}

export default connect(mapStateToProps, {
  loadMembers,
})(App)
