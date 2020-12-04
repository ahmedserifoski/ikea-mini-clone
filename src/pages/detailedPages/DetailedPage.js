import React from 'react'
import {useParams} from "react-router-dom"
import data from "../../components/data/data"

const DetailedPages = () => {

    const {detailedId} = useParams()
    // console.log(parseInt(detailedId))
    // console.log(data[0])
    const thisService = data.find(service => service.id == detailedId)
    console.log(thisService.name)

    return (
        <div>
            {thisService.name}
        </div>
    )
}

export default DetailedPages
