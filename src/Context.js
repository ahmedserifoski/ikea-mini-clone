import React, {useEffect, useState} from 'react'
import data from "./components/data/data"
const Context = React.createContext()

const ContextProvider = (props) => {

    const [furniture, setFurniture] = useState([])
    const [cartItems, setCartItems] = useState([])

    

    const addToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    console.log(cartItems)

    useEffect(() => {
        setFurniture(data)
    }, [])
    
    

    return (
        <Context.Provider value={{furniture, addToCart, cartItems}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

