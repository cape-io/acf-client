import React, { PropTypes } from 'react'
import NavbarLink from './NavbarLink'
import SearchBox from './SearchBox'

function Header(props) {
  const { logo, navLinks } = props
  return (
    <div id="header" className="sticky clearfix">
      <header id="topNav">
        <div className="container">
          <button
            className="btn btn-mobile"
            data-toggle="collapse"
            data-target=".nav-main-collapse"
          >
            <i className="fa fa-bars" />
          </button>
          <ul className="pull-right nav nav-pills nav-second-main">
            <SearchBox />
          </ul>
          <NavbarLink to="/" className="logo pull-left">
            <img src={logo} alt="logo" />
          </NavbarLink>
          <div className="navbar-collapse pull-right nav-main-collapse collapse">
            <nav className="nav-main">
              <ul id="topMain" className="nav nav-pills nav-main">
                {
                  navLinks.map(({ id, to, href, className, text }) => (
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
  logo: PropTypes.string.isRequired,
  navLinks: PropTypes.array.isRequired,
}
Header.defaultProps = {
  logo: 'https://composersforum.org/sites/all/themes/acfzen/acfzen/logo.png',
}

export default Header
