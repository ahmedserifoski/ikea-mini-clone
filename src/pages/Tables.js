import React, {useContext} from 'react'
import PieceOfFurniture from "../components/pieceOfFurniture"
import {Context} from "../Context"

import "../App.css"

const Tables = () => {
    
    const {furniture} = useContext(Context)
    console.log(furniture.slice(5, 10))
    const tables = furniture.slice(10, 14)
    const furnitureElements = tables.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))
    return (
        <div className="tables">
            <h1 className="header">Our Tables</h1>
            <div className="furniture">
                {furnitureElements}
            </div>
        </div>
    )
}

export default Tables
