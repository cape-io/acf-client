import React, { PropTypes } from 'react'

// Online contribution donation form
function Contribute({ once, sustaining, name, comment, nameHelp, donation }) {
  return (
    <div>

      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
          {once}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
          {sustaining}
        </label>
      </div>

optionsRadios={Contribute != null ? 'test' : 'shit works'}

      <form className="form-inline">

      </form>

      <div>
        <label className="radio-inline">
          <input type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
          { donation }
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


      <button type="submit" className="btn btn-default">Continue
      </button>

    </div>
  )
}

Contribute.propTypes = {
  once: PropTypes.string,
  sustaining: PropTypes.string,
  name: PropTypes.string.isRequired,
  nameHelp: PropTypes.string,
  comment: PropTypes.string,
  donations: PropTypes.array,
  toggleRecurring: PropTypes.bool,
}

Contribute.defaultProps = {
  once: 'One-Time Contribution',
  sustaining: 'Monthly Sustaining Contribution',
  name: 'Recognition Name(s)',
  nameHelp: 'Please list your name(s) as you would like to be acknowledged in ACFs donor list.',
  comment: 'Additional Comment(s)',
  donation: '$5',
}

export default Contribute
