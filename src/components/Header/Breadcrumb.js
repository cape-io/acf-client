import React, { PropTypes } from 'react'
import { Link } from 'redux-history-sync'
import map from 'lodash/map'

function Breadcrumb({ activeTitle, path }) {
  return (
    <section className="page-header page-header-xs">
      <div className="container">
        {/* breadcrumbs */}
        <ol className="breadcrumb breadcrumb-inverse">
          { map(path, ({ link, text }) =>
              <li><Link to={link}>{text}</Link></li>
          )}
          { activeTitle && <li className="active">{activeTitle}</li> }
        </ol>{/* /breadcrumbs */}
      </div>
    </section>
  )
}
Breadcrumb.propTypes = {
  activeTitle: PropTypes.string.isRequired,
  path: PropTypes.array.isRequired,
}
export default Breadcrumb
