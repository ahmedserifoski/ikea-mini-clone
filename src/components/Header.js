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
            <Link to="/cart">
                <div>
                    <i className={cartItems.length > 0 ? `ri-shopping-cart-fill cart` : `ri-shopping-cart-line ri-2x`}></i>
                </div>
            </Link>
            
        </header>
    )
}

export default Header
