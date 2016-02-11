import React from 'react'
import NavbarLink from './NavbarLink'
import SearchBox from './SearchBox'

function Header({ navLinks }) {
  return (
    <div id="header" className="sticky clearfix">
      <header id="topNav">
        <div className="container">
          {/* Mobile Menu Button */}
          <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
            <i className="fa fa-bars" />
          </button>
          {/* BUTTONS */}
          <ul className="pull-right nav nav-pills nav-second-main">
            <SearchBox />
          </ul>
          {/* /BUTTONS */}
          {/* Logo */}
          <NavbarLink to="/" className="logo pull-left">
            <img src="https://composersforum.org/sites/all/themes/acfzen/acfzen/logo.png" alt />
          </NavbarLink>
          <div className="navbar-collapse pull-right nav-main-collapse collapse">
            <nav className="nav-main">
              <ul id="topMain" className="nav nav-pills nav-main">
                {
                  /* Inline navigation link style */
                  navLinks.map( ({id, to, href, className, text}) => (
                    <li key={id} className={className}>
                      <NavbarLink to={to} href={href}>{text}</NavbarLink>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
Header.propTypes = {
}
// Logout.defaultProps = {}

export default Header
