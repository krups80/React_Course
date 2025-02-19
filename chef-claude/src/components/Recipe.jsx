import ReactMarkdown from "react-markdown"
import { createRoot } from "react-dom"

export default function Recipe({recipe}){
    return (
        <section className="suggested-recipe-container">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown children={recipe}/>
        </section>
    )

}