import React from 'react'
import PropTypes from 'prop-types'

const NavItem = ({ children }) => (
  <a className="nav-item">
    {children}
  </a>
)

NavItem.defaultProps = {
  children: ''
}

NavItem.propTypes = {
  children: PropTypes.node
}

const Nav = () => (
  <nav className="nav">
    <div className="nav-left">
      <NavItem>
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
      </NavItem>
    </div>
    <div className="nav-center">
      <NavItem className="nav-item">
        Home
      </NavItem>
      <NavItem className="nav-item">
        Articles
      </NavItem>
      <NavItem className="nav-item">
        Weekly
      </NavItem>
    </div>
    <div className="nav-right">
      <NavItem>
        <span className="icon">
          <i className="fa fa-github" />
        </span>
      </NavItem>
    </div>
  </nav>
)
export default Nav
