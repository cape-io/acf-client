import React, { PropTypes } from 'react'

// Online contribution donation form
function Contribute({ Contribute, Sustaining, Name, Comment, NameHelp }) {
  return (

    <form>
      <div className="radio">
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
          {Contribute}
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
          {Sustaining}
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputName">{ Name }</label>
        <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
          <span id="helpBlock" className="help-block">{ NameHelp }</span>
      </div>
      <div className="form-group">
        <label htmlFor="exampleComment">{ Comment }</label>
        <textarea className="form-control" rows={3} defaultValue={""} />
      </div>
      <button type="submit" className="btn btn-default">Continue
      </button>
    </form>
  )
}

Contribute.propTypes = {
  Contribute: PropTypes.radio,
  Sustaining: PropTypes.radio,
  Name: PropTypes.string.isRequired,
  NameHelp: PropTypes.string,
  Comment: PropTypes.string,
}
Contribute.defaultProps = {
  Contribute: 'One-Time Contribution',
  Sustaining: 'Monthly Sustaining Contribution',
  Name: 'Recognition Name(s)',
  NameHelp: 'Please list your name(s) as you would like to be acknowledged in ACFs donor list.',
  Comment: 'Additional Comment(s)',
}

export default Contribute
