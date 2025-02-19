export default function IngredientsList(props) {
  const ingredientsItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section>
      <div className="list-container">
        <p className="heading-class">Ingredients on hand:</p>
        <ul className="ingredients-list">{ingredientsItems}</ul>
      </div>
      {props.ingredients.length > 3 ? (
        <div className="container-recipe">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
}
