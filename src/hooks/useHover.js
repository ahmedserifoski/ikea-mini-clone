import {useState} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)

    function onEnter() {
        onmouseenter=setHovered(true)
    }

    function onLeave() {
        onmouseenter=setHovered(false)
    }
}

export {useHover}