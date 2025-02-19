import { useState } from "react"
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";

export default function Main(){

    const [ingredients, setIngredients] = useState(["banana","sugar","milk","cream"]) 
    const [theRecipe, setTheRecipe] = useState(null)
    
    function handleSubmit(event){
        event.preventDefault();
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const ingredient = formData.get("ingredient")
        setIngredients(prevValue => [...prevValue,ingredient])
        formEl.reset()
    }

    
    async function handleGetRecipe(){
        try{
            const response = await getRecipeFromMistral(ingredients)
            setTheRecipe(response)
        } catch (err){
            console.error(err.message)
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    className="form-input"
                    type="text"
                    aria-label="add ingredient"
                    placeholder=" e.g orgeno"
                    name="ingredient"
                />
                <button className="form-button">Add ingredient</button>
            </form>
            { ingredients.length > 0 ? <IngredientsList getRecipe={handleGetRecipe} ingredients={ingredients}/> : null}
                
                <div>
                    {theRecipe && <Recipe recipe={theRecipe}/> }
                </div>
        </main>
    )
}