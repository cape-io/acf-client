import React, { PropTypes } from 'react'

import Search from '../Search'
import Filter from '../Filter'

function Filters({ states }) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <Search prefix={[ 'filter', 'displayName' ]} />
      </div>
      <div className="col-sm-6">
        <Filter options={states} prefix={[ 'filter', 'address.state.value' ]} />
      </div>
    </div>
  )
}
Filters.propTypes = {
  states: PropTypes.array.isRequired,
}
// Logout.defaultProps = {}

export default Filters
