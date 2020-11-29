import React, {useContext, useState} from 'react'
import 'remixicon/fonts/remixicon.css'
import {Link} from "react-router-dom"
import {Context} from "../Context"

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, 
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

import "../App.css"

const Header = () => {

    const {cartItems} = useContext(Context)
    const {isOpen, setIsOpen} = useState(false)

    const toggleCollapse = () => {
        setIsOpen(isOpen => !isOpen)
    }
    

    return (
        
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="black-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
           
            <MDBNavItem>
            <Link className="link" to="/cart">
                <div>
                    <i className={cartItems.length > 0 ? `ri-shopping-cart-fill cart` : `ri-shopping-cart-line cart ri-2x`}></i>
                </div>
            </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    
        // <header>
        //     <Link to="/">
        //         <img src={require("../images/ikea-logo.svg")} alt=""/>
        //     </Link>
        //     <div className="nav">
        //         <Link className="link" to="/">Home</Link>
        //         <Link className="link" to="/cabinets">Cabinets</Link>
        //         <Link className="link" to="/sofas">Sofas</Link>
        //         <Link className="link" to="/tables">Tables</Link>
        //         <Link className="link" to="/cart">
        //             <div>
        //                 <i className={cartItems.length > 0 ? `ri-shopping-cart-fill cart` : `ri-shopping-cart-line cart ri-2x`}></i>
        //             </div>
        //         </Link>
        //     </div>
            
            
        // </header>
    )
}

export default Header
