import React, {useState, useContext} from 'react'
import {Context} from "../Context"
import "../App.css"

import {Link} from "react-router-dom"

const PieceOfFurniture = ({onePiece}) => {
    //get following items with useContext
    const {addToCart, cartItems, removeFromCart} = useContext(Context)

    const [hovered, setHovered] = useState(false)

    //the icon sits inside the Link, so stop the click from also opening the detail page
    const handleCartClick = (event, action) => {
        event.preventDefault()
        event.stopPropagation()
        action(onePiece)
    }

    //display/hide the plus iteam to add and delete from
    const cartItem = () => {
        const allreadyInCart = cartItems.some(element => element.id === onePiece.id)
        if(allreadyInCart) {
            return <i onClick={(event) => handleCartClick(event, removeFromCart)} className="ri-add-circle-fill cart"></i>
            
        } else {
            return hovered ? <i onClick={(event) => handleCartClick(event, addToCart)} className="ri-add-circle-line cart"></i> : ""
        }
        
    } 

    return (
        
        <Link to={`/home/${onePiece.id}`}>
            <div 
                onMouseLeave={() => setHovered(false)} 
                onMouseEnter={() => setHovered(true)} 
                className="card"
            >
                <img className="image" src={onePiece.furniture} alt=""/>
                <p className="name"><strong>{onePiece.name}</strong></p>
                <p className="price">{new Intl.NumberFormat('ch-CH', { style: 'currency', currency: 'CHF' }).format(onePiece.price)  }</p>
                {cartItem()}
            </div>
        </Link>
    )
}

export default PieceOfFurniture
