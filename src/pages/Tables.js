import React, {useContext} from 'react'
import PieceOfFurniture from "../components/pieceOfFurniture"
import {Context} from "../Context"

import "../App.css"

const Cabinets = () => {
    
    const {furniture} = useContext(Context)
    
    const sofas = furniture.slice(10, 14)
    const furnitureElements = sofas.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))
    return (
        <div className="sofas">
            <h1 className="header">Our Sofas</h1>
            <div className="furniture">
                {furnitureElements}
            </div>
        </div>
    )
}

export default Cabinets
