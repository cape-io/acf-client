import React, { PropTypes } from 'react'

// Basic suggestion button.
function Home({ message }) {
  return (
    <h2 className="home">
      { message }
    </h2>
  )
}

Home.propTypes = {
  message: PropTypes.string.isRequired,
}
Home.defaultProps = {
  message: 'Placeholder...',
}
export default Home
