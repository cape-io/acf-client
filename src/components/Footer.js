import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="sticky">
      <div className="copyright">
        <div className="container">
          <ul className="pull-right nomargin list-inline mobile-block">
            <li><a href="https://composersforum.org/terms-service">Terms &amp; Conditions</a></li>
            <li>•</li>
            <li><a href="https://composersforum.org/privacy-policy">Privacy</a></li>
          </ul>
          © 2015 American Composers Forum. All rights reserved
        </div>
      </div>
    </footer>
  )
}
Footer.propTypes = {}
// Logout.defaultProps = {};

export default Footer
