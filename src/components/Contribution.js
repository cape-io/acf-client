import React, { PropTypes } from 'react'
import Page from './Page'

// Online contribution donation form
function Contribute(props) {
  const {
    comment,
    donation,
    once,
    options,
    submitOnce, submitRecurring, sustaining,
    name, nameHelp,
  } = props
  return (
    <Page>

      <div className="options btn btn-group">
        { options.map(amount => <button className="btn btn-default">{`$${amount}`}</button>)}
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="exampleInputAmount"></label>
        <div className="input-group">
          <div className="input-group-addon">$</div>
          <input type="text" className="form-control" id="exampleInputAmount" placeholder="" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputName">{ name }</label>
        <input type="text" className="form-control" id="exampleInputName" placeholder="Name" />
          <span id="helpBlock" className="help-block">{ nameHelp }</span>
      </div>

      <div className="form-group">
        <label htmlFor="exampleComment">{ comment }</label>
        <textarea className="form-control" rows={3} defaultValue={""} />
      </div>

      <div className="contribute-buttons btn btn-group">
        <button className="btn" onClick={submitOnce}>{ once }</button>
        <button className="btn" onClick={submitRecurring}>{ sustaining }</button>
      </div>
    </Page>
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
  options: [
    20, 50, 100, 250, 500,
  ],
}

export default Contribute
