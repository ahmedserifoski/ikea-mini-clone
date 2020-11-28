import React, {useContext} from 'react'
import 'remixicon/fonts/remixicon.css'
import {Link} from "react-router-dom"
import {Context} from "../Context"

import "../App.css"

const Header = () => {
    const {cartItems} = useContext(Context)
    return (
        <header>
            <Link to="/">
                <img src={require("../images/ikea-logo.svg")} alt=""/>
            </Link>
            <div className="nav">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/cabinets">Cabinets</Link>
                <Link className="link" to="/sofas">Sofas</Link>
                <Link className="link" to="/tables">Tables</Link>
                <Link className="link" to="/cart">
                <div>
                    <i className={cartItems.length > 0 ? `ri-shopping-cart-fill cart` : `ri-shopping-cart-line cart ri-2x`}></i>
                </div>
                </Link>
            </div>
            
            
        </header>
    )
}

export default Header
