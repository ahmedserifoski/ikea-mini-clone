import React, {useEffect, useState} from 'react'
import data from "./components/data/data"
const Context = React.createContext()

const ContextProvider = (props) => {

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
    
    // console.log(cartItems)

    return (
        <Context.Provider value={{furniture, addToCart, cartItems, removeFromCart, emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

