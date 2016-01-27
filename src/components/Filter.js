import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'
import classnames from 'classnames'

function ScheduleFilters({ className, filters, select, update, placeholder }) {
  return (
    <input
      className={className}
      type="select"
      placeholder={placeholder}
      onChange={update}
    >
      <option value={null}>
        {select}
      </option>
      {
        map(filters, ({ active, label, value }, index) => (
          <option
            key={index}
            className={classnames({ active })}
            value={ value }
          >
            { label }
          </option>
        ))
      }
    </input>
  )
}

ScheduleFilters.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.array.isRequired,
  select: PropTypes.string,
  update: PropTypes.func.isRequired,
}
ScheduleFilters.defaultProps = {
  select: 'Select',
}

export default ScheduleFilters
