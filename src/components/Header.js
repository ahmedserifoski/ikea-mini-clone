import React, {useContext, useState} from 'react'
import 'remixicon/fonts/remixicon.css'
import {Link} from "react-router-dom"
import {Context} from "../Context"

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";

import "../App.css"

const Header = () => {

    const {cartItems} = useContext(Context)
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(isOpen => !isOpen)
    }

    return (
        
      <MDBNavbar light expand="md">
        
        <MDBNavLink to="/">
            <img src={require("../images/ikea-logo.svg")} alt=""/>
        </MDBNavLink>
        
        <Link className="cartLink" to="/cart">
                <i className={cartItems.length > 0 ? `ri-shopping-cart-fill cart` : `ri-shopping-cart-line cart ri-2x`}></i>
        </Link>
        <MDBNavbarToggler className="toggler mr-5" onClick={toggleCollapse} />
        
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
                    <MDBNavLink className="link" to="/" onClick={toggleCollapse}>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="link" to="/cabinets" onClick={toggleCollapse}>Cabinets</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="link" to="/sofas" onClick={toggleCollapse}>Sofas</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="lastLink">
                    <MDBNavLink className="link" to="/tables" onClick={toggleCollapse}>Tables</MDBNavLink>
                </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        
      </MDBNavbar>
    
    )
}

export default Header
