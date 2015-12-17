import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'
import { loadMembers, resetErrorMessage } from '../redux/actions'
import Header from '../components/Header/Header'

// This is called from within the container component class.
function loadData(props) {
  // Load info about the user session.
  props.loadMembers()
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  componentWillMount() {
    loadData(this.props)
  }

  handleDismissClick(err) {
    this.props.resetErrorMessage()
    err.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    const { children, navLinks, title } = this.props
    return (
      <div className="container" id="wrapper">
        <Header navLinks={navLinks} styles={{}} title={title} />
        { this.renderErrorMessage() }
        { children }
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  // Injected by React Redux
  errorMessage: PropTypes.string,
  loadMembers: PropTypes.func.isRequired,
  navLinks: PropTypes.array.isRequired,
  resetErrorMessage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  pushPath: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { db, errorMessage } = state
  const { navLinks, support, title, image, description } = db
  return {
    description,
    errorMessage,
    image,
    navLinks,
    support,
    title,
  }
}

export default connect(mapStateToProps, {
  loadMembers,
  resetErrorMessage,
  pushPath,
})(App)
