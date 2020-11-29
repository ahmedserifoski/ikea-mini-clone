import React, {useContext} from 'react'
import PieceOfFurniture from "../components/pieceOfFurniture"
import {Context} from "../Context"

import "../App.css"

const Cabinets = () => {
    
    const {furniture} = useContext(Context)
    const cabinets = furniture.slice(0, 5)
    const furnitureElements = cabinets.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))
    return (
        <div className="cabinets">
            <h1 className="header">Our Cabinets</h1>
            <div className="furniture">
                {furnitureElements}
            </div>
        </div>
    )
}

export default Cabinets
