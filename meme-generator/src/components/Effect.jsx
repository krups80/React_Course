import { useState } from "react"
import { useEffect } from "react"

export default function Effect(){

    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log("render")
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData)
    },[count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 2)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}