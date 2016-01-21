Import React, { PropTypes } from 'react'

// Online contribution donation form
function Contribute({ }) {
    return (

      <form>
        <div className="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
            One-Time Contribution
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
            Monthly Sustaining Contribution
          </label>
        </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">Recognition Name(s)</label>
            <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
              <span id="helpBlock" className="help-block">Please list your name(s) as you would like to be acknowledged in ACF's donor list.</span>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows={3} defaultValue={""} />f
          </div>
          <button type="submit" className="btn btn-default">Continue
          </button>
      </form>
    );
  }
});

Contribute.propTypes = {
  Contribute: PropTypes.radio,
  Sustaining: PropTypes.radio,
  Name: PropTypes.string.isRequired,
  Comment: PropTypes.string,
}
Contribute.defaultProps = {
  Contribute: "One-Time Contribution",
  Sustaining: "Monthly Sustaining Contribution",
  Name: "Recognition Name(s)",
  Comment: "Additional Comment(s)",
}

export default Contribute
