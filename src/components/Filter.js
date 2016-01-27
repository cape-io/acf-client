import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'
import classnames from 'classnames'

function Filter({ className, options, noFilterText, onChange, placeholder }) {
  function handleChange(event) {
    const newValue = event.target.value
    onChange(newValue)
  }
  return (
    <select
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
    >
      <option value="-">
        {noFilterText}
      </option>
      {
        map(options, ({ active, label, value }, index) => (
          <option
            key={index}
            className={classnames({ active })}
            value={ value }
          >
            { label }
          </option>
        ))
      }
    </select>
  )
}

Filter.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  noFilterText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
Filter.defaultProps = {
  noFilterText: 'Select',
}

export default Filter
