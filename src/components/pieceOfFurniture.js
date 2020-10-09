import React, {useState, useContext} from 'react'
import {Context} from "../Context"
import "../App.css"



const PieceOfFurniture = ({onePiece, cartItems}) => {

    const {addToCart} = useContext(Context)

    const [hovered, setHovered] = useState(false)

    const cartItem = hovered && <i onClick={() => addToCart(onePiece)} className={`ri-add-circle-line cart`}></i>

    return (
        <div 
            onMouseLeave={() => setHovered(false)} 
            onMouseEnter={() => setHovered(true)} 
            className="card"
        >
            <img className="image" src={onePiece.furniture} alt=""/>
            <p className="name"><strong>{onePiece.name}</strong></p>
            <p className="price">{new Intl.NumberFormat('ch-CH', { style: 'currency', currency: 'CHF' }).format(onePiece.price)  }</p>
            {cartItem}
        </div>
    )
}

export default PieceOfFurniture
