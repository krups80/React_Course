import { useState } from "react"
import { useEffect } from "react"

export default function Wind(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", function(){
            setWindowWidth(this.window.innerWidth);
        })
    },[])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}