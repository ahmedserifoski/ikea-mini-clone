import React, {useState, useContext} from 'react'
import {Context} from "../Context"
import "../App.css"

const CartItem = ({item}) => {
    const [hovered, setHovered] = useState(false)

    const {removeFromCart} = useContext(Context)

    return (
        <div className="cart-item">
            <div className="cart-left">
                <i 
                    onClick={() => removeFromCart(item)} 
                    className={hovered ? "ri-delete-bin-fill ri-xl" : "ri-delete-bin-line ri-xl"}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                </i>
                <img src={item.furniture}  alt=""/>
                <h2>{item.name}</h2>
            </div>
            
            <p>{new Intl.NumberFormat('ch-CH', { style: 'currency', currency: 'CHF' }).format(item.price)  }</p>
        </div>
    )
}

export default CartItem
