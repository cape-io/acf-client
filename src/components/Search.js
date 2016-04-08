import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

function Search({ form: { value }, formEvent }) {
  return (
    <div role="form" className="form-group search">
      <input
        {...formEvent}
        className="form-control"
        name="item-search"
        placeholder="Search by name"
        type="text"
        value={value}
      />
    </div>
  )
}

Search.propTypes = {
  form: PropTypes.object,
  formEvent: PropTypes.object,
}
Search.defaultProps = {
}

export default connectField({ prefix: [ 'search' ] })(Search)
