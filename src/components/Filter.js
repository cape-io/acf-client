import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import Select from './Select'

function Filter({ form: { value }, formEvent, ...props }) {
  return (
    <Select {...formEvent} {...props} value={value || '-'} />
  )
}

Filter.propTypes = {
  form: PropTypes.object,
  formEvent: PropTypes.object,
}
export default connectField({ prefix: [ 'filter' ] })(Filter)
