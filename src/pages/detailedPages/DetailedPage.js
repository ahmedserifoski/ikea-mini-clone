import React, {useState, useContext} from 'react'
import {useParams} from "react-router-dom"
import data from "../../components/data/data"
import {Context} from "../../Context"

const DetailedPages = () => {

    const {addToCart, cartItems, removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)
    const {detailedId} = useParams()
    const thisService = data.find(service => service.id == detailedId)
    // console.log(thisService.name)

    if(!thisService) {
        return <h2 className="header">Product not found</h2>
    }

    //display/hide the plus iteam to add and delete from
    const cartItem = () => {
        const allreadyInCart = cartItems.some(element => element.id === thisService.id)
        if(allreadyInCart) {
            return <i onClick={() => removeFromCart(thisService)} className="ri-add-circle-fill detailedCart"></i>
            
        } else {
            return hovered ? <i onClick={() => addToCart(thisService)} className="ri-add-circle-line detailedCart"></i> : ""
        }
        
    } 

    return (
        <div className="detailPage"
        onMouseLeave={() => setHovered(false)} 
        onMouseEnter={() => setHovered(true)}
        >
            <img 
                className="detailPage__img" 
                src={thisService.furniture} 
                
            />
            <h2 className="detailPage__title">{thisService.name} {cartItem()}</h2>
            <p className="detailPage__description">{thisService.description}</p>
            <h3 className="detailPage__price">{new Intl.NumberFormat('ch-CH', { style: 'currency', currency: 'CHF' }).format(thisService.price)  }</h3>
            
        </div>
    )
}

export default DetailedPages
