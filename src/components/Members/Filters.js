import React, { PropTypes } from 'react'

import Search from '../Search'
import Filter from '../Filter'

function Filters({ prefix, filter: { states } }) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <Search prefix={[ prefix, 'name' ]} />
      </div>
      <div className="col-sm-6">
        <Filter options={states.options} prefix={[ prefix, 'states' ]} />
      </div>
    </div>
  )
}
Filters.propTypes = {
  filter: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
}
// Logout.defaultProps = {}

export default Filters
