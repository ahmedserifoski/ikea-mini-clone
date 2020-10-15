import React, {useContext, useState} from 'react'
import {Context} from "../Context"
import CartItem from "../components/CartItem"
import "../App.css"

const Cart = () => {

    const [buttonValue, setButtonValue] = useState("Place Order")

    const {cartItems, emptyCart} = useContext(Context)

    const totalCost = function() {
        let total = 0
        for(let i = 0; i < cartItems.length; i++) {
            total = total + cartItems[i].price
        }
        return total.toLocaleString("en-US", {style: "currency", currency: "CHF"})
    }

    const placeOrder = () => {
        setButtonValue("Ordering...")
        setTimeout(() => {
            setButtonValue("Order Placed")
            emptyCart()
        }, 2000)
        
    }


    const showButton = () => {
        if(cartItems.length > 0) {
            return <button onClick={placeOrder}>{buttonValue}</button>
        } else {
            return <h3>Your cart is empty</h3>
        }
    }

    return (
        <main className="cart-page">
            {buttonValue === "Order Placed" ? <h2 style={{textAlign: "center"}}>Order Recieved</h2> : ""}
           { cartItems.map(item => (
                <CartItem key={item.id} item={item}/>
            ))}
            <p className="total-cost">Total: {totalCost()}</p>
            <div className="order-button">
                {showButton()}
            </div>
        </main>
    )
}

export default Cart
