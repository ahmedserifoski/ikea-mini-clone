import React, {useContext} from 'react'
import {Context} from "../Context"
import PieceOfFurniture from "../components/pieceOfFurniture"
import "../App.css"

const Furniture = () => {
    
    const {furniture} = useContext(Context)

    const furnitureElements = furniture.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))

    return (
        <div className="home">
            <h1 className="header">Out Furniture</h1>
            <div className="furniture">
                {furnitureElements}
            </div>
            
        </div>
    )
}

export default Furniture
