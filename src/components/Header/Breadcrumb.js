import React, { PropTypes } from 'react'
import { Link } from 'redux-history-sync'

function Breadcrumb({ displayName }) {
  return (
    <section className="page-header page-header-xs">
      <div className="container">
        {/* breadcrumbs */}
        <ol className="breadcrumb breadcrumb-inverse">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/members">
              Members
            </Link>
          </li>
          <li className="active">{displayName}</li>
        </ol>{/* /breadcrumbs */}
      </div>
    </section>
  )
}
Breadcrumb.propTypes = {
  displayName: PropTypes.string.isRequired,
}
export default Breadcrumb
