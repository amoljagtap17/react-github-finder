import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from 'mdbreact'

export const Navbar = ({ icon = 'github', title = 'Github Finder' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => setIsOpen(prevIsOpen => !prevIsOpen)

  return (
    <MDBNavbar color="danger-color-dark" dark expand="md" className="z-depth-3">
      <MDBNavbarBrand>
        <h3 className="white-text">
          <MDBIcon fab icon={icon} /> {title}
        </h3>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}
