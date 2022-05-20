import React, {useContext} from 'react'

import PieceOfFurniture from "../components/pieceOfFurniture"
import "../App.css"

const Furniture = ({furniture}) => {
    


    const furnitureElements = furniture.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))

    return (
        <div className="home">
            <h1 className="header">Our Furniture</h1>
            <div className="furniture">
                {furnitureElements}
            </div>
            
        </div>
    )
}

export default Furniture
