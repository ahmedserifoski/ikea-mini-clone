import React, {useContext} from 'react'
// import {Context} from "../Context"
import PieceOfFurniture from "../components/pieceOfFurniture"
import "../App.css"

const Furniture = ({furniture}) => {
    
    // const {furniture} = useContext(Context)
    console.log(window.location.href.split("/")[3])

    let furnitureElements = furniture.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))

    if(window.location.href === "http://localhost:3000/cabinets") {
        const cabinets = furniture.slice(0, 5)
        furnitureElements = cabinets.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))
    }

    if(window.location.href === "http://localhost:3000/sofas") {
        const sofas = furniture.slice(5, 10)
        furnitureElements = sofas.map(onePiece => (
            <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
        ))
    }

    if(window.location.href === "http://localhost:3000/tables") {
        const tables = furniture.slice(10, 14)
        furnitureElements = tables.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))
    }
    

    return (
        <div className="home">
            <h1 className="header">{window.location.href.split("/")[3] == false? "OUR FURNITURE" : "OUR " + window.location.href.split("/")[3].toUpperCase()}</h1>
            <div className="furniture">
                {furnitureElements}
            </div>
            
        </div>
    )
}

export default Furniture
