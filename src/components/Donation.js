Import React, { PropTypes } from 'react'

// Online contribution donation form
var Donation = React.createClass({
  render: function() {
    return (

      <form>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> One-Time Contribution
            <input type="checkbox" /> Monthly Sustaining Contribution
          </label>
          <div className="form-group">
            <label htmlFor="exampleInputName">Recognition Name(s)</label>
            <input type="name" className="form-control" id="exampleInputName" placeholder="Name" />
            <p className="help-block">Please list your name(s) as you would like to be acknowledged on ACFs donor list.</p>
            <label htmlFor="exampleAdditionalComments">Additional Comment(s)</label>
            <input type="comments" className="form-control" id="exampleAdditionalComments" placeholder="Name" />
          </div>
          <button type="Continue" className="btn btn-default">Continue</button>
        </div>
      </form>
    );
  }
});

Loading.propTypes = {
  Contribution: PropTypes.checked.isRequired,
  Monthly: PropTypes.checked.isRequired,
  Name: PropTypes.string.isRequired,
  Comments: PropTypes.string,
}
Loading.defaultProps = {
  Contribution: 'checked',
}

export default Donation
