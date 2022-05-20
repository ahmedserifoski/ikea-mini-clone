import React, {useContext} from 'react'
import PieceOfFurniture from "../components/pieceOfFurniture"


import "../App.css"


const Tables = ({furniture}) => {

    
    const sofas = furniture.slice(10, 14)
    const furnitureElements = sofas.map(onePiece => (
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
