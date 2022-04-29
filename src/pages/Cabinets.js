import React, {useContext} from 'react'
import PieceOfFurniture from "../components/pieceOfFurniture"


import "../App.css"

const Cabinets = (props) => {
    

    // const cabinets = furniture.slice(0, 5)
    // const furnitureElements = cabinets.map(onePiece => (
    //     <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    // ))
    return (
        <>{props.children}</>
    )
}

export default Cabinets
