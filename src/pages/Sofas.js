import React, {useContext} from 'react'
import PieceOfFurniture from "../components/pieceOfFurniture"


import "../App.css"

const Sofas = ({furniture}) => {
    

    
    const sofas = furniture.slice(5, 10)
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

export default Sofas
