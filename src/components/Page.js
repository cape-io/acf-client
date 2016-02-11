import React, { PropTypes } from 'react'

// Basic suggestion button.
function Page({ children }) {
  return (
    <div className="container">
      { children }
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
}
Page.defaultProps = {
}
export default Page
