import React, {useContext} from 'react'
import PieceOfFurniture from "../components/pieceOfFurniture"
import {Context} from "../Context"

import "../App.css"

const Furniture = () => {
    
    const {furniture} = useContext(Context)
    // console.log(furniture)
    
    const furnitureElements = furniture.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))
    return (
        <>
            <h1 className="header">Our Furniture</h1>
            <div className="furniture">
                {furnitureElements}
            </div>
        </>
    )
}

export default Furniture
