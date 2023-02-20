import React, {useContext} from 'react'
import {Context} from "../Context"
import PieceOfFurniture from "../components/pieceOfFurniture"
import "../App.css"

const Furniture = () => {

    const {furniture} = useContext(Context)

    const allFurniture = furniture.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))

    const cabinetsData = furniture.slice(0, 5)
    const cabinets = cabinetsData.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))

    const sofasData = furniture.slice(5, 10)
    const sofas = sofasData.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))

    const tablesData = furniture.slice(10, 14)
    const tables = tablesData.map(onePiece => (
        <PieceOfFurniture key={onePiece.id} onePiece={onePiece}/>
    ))

    return (
        <div className="home">
            <h1 className="header">{window.location.href.split("/")[3] === "" ? "Our Furniture" : "Our " + window.location.href.split("/")[3].charAt(0).toUpperCase() + window.location.href.split("/")[3].slice(1)}</h1>
            <div className="furniture">
                {window.location.href.split("/")[3] === "" && allFurniture}
             {window.location.href.split("/")[3] === "cabinets" && cabinets}
                {window.location.href.split("/")[3] === "sofas" && sofas}
                {window.location.href.split("/")[3] === "tables" && tables}
            </div>
            
        </div>
    )
}

export default Furniture
