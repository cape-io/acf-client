import React, { PropTypes } from 'react'

// Online contribution donation form
function Contribute({ options, value, onChange, onFocus, onBlur }) {
  return (
    <div>
      <div className="options btn btn-group">
        {
          options.map(amount => {
            function handleClick() {
              onChange(amount.toString())
            }
            return (
              <button className="btn btn-default" onClick={handleClick}>
                {`$${amount}`}
              </button>
            )
          }
        )}
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="exampleInputAmount"></label>
        <div className="input-group">
          <div className="input-group-addon">$</div>
          <input
            type="text"
            className="form-control"
            id="contributeAmount"
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            placeholder=""
            value={value}
          />
        </div>
      </div>
    </div>
  )
}

Contribute.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
}

Contribute.defaultProps = {
  options: [
    20, 50, 100, 250, 500,
  ],
}

export default Contribute
