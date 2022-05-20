import React, {useState, useEffect} from 'react'
import data from "./components/data/data"

const RenderPropsLogic = (props) => {

    const [furniture, setFurniture] = useState([])
    const [cartItems, setCartItems] = useState([])

    

    const addToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    

    useEffect(() => {
        setFurniture(data)
    }, [])

    const removeFromCart = (newItem) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== newItem.id))
    }

    const emptyCart = () => {
        setCartItems([])
    }
    

  return (
    <div>
        {props.render(furniture, cartItems, addToCart, removeFromCart, emptyCart)}
    </div>
  )
}

export default RenderPropsLogic