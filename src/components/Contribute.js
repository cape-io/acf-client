import React, { PropTypes } from 'react'

// Online contribution donation form
function Contribute({ Once, Sustaining, Name, Comment, NameHelp, Donation }) {
  return (

    <form>

      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
          {Once}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
          {Sustaining}
        </label>
      </div>

optionsRadios={Contribute != null ? 'test' : 'shit works'}

      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputAmount"></label>
          <div className="input-group">
            <div className="input-group-addon">$</div>
            <input type="text" className="form-control" id="exampleInputAmount" placeholder="" />
          </div>
        </div>
      </form>

      <div>
        <label className="radio-inline">
          <input type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" /> { Donation }
        </label>
        <label className="radio-inline">
          <input type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" /> $10
        </label>
        <label className="radio-inline">
          <input type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" /> $20
        </label>
        <label className="radio-inline">
          <input type="radio" name="inlineRadioOptions" id="inlineRadio4" defaultValue="option4" /> $50
        </label>
        <label className="radio-inline">
          <input type="radio" name="inlineRadioOptions" id="inlineRadio5" defaultValue="option5" /> $
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
  Once: PropTypes.radio,
  Sustaining: PropTypes.radio,
  Name: PropTypes.string.isRequired,
  NameHelp: PropTypes.string,
  Comment: PropTypes.string,
  Donations: PropTypes.array,
}
Contribute.defaultProps = {
  Once: 'One-Time Contribution',
  Sustaining: 'Monthly Sustaining Contribution',
  Name: 'Recognition Name(s)',
  NameHelp: 'Please list your name(s) as you would like to be acknowledged in ACFs donor list.',
  Comment: 'Additional Comment(s)',
  Donation: '$',
}

export default Contribute
