import axios from "axios";
import { useEffect, useState } from "react";

const Recipe = (props) => {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
      )
      .then((res) => setRecipe(res.data.drinks[0]));
  }, [props.match.params.id]);
  return (
    <div className="recetteFont">
      <h2>{recipe.strDrink}</h2>

      <div className="presentation">
        <div className="photoCocktail">
          <img
            className="photo"
            src={recipe.strDrinkThumb}
            width="200"
            height="200"
            alt={recipe.strDrink}
          />
        </div>
        <div className="descriptif">
          <div className="ingredientCocktail">
            <section className="listeIngredients">
              <h3>Ingredients :</h3>
              <ul>
                {recipe.strIngredient1 ? (
                  <li>
                    {recipe.strMeasure1} {recipe.strIngredient1}
                  </li>
                ) : null}
                {recipe.strIngredient2 ? (
                  <li>
                    {recipe.strMeasure2} {recipe.strIngredient2}
                  </li>
                ) : null}
                {recipe.strIngredient3 ? (
                  <li>
                    {recipe.strMeasure3} {recipe.strIngredient3}
                  </li>
                ) : null}
                {recipe.strIngredient4 ? (
                  <li>
                    {recipe.strMeasure4} {recipe.strIngredient4}
                  </li>
                ) : null}
                {recipe.strIngredient5 ? (
                  <li>
                    {recipe.strMeasure5} {recipe.strIngredient5}
                  </li>
                ) : null}
                {recipe.strIngredient6 ? (
                  <li>
                    {recipe.strMeasure6} {recipe.strIngredient6}
                  </li>
                ) : null}
                {/* {() => {
              const ingredients = [];

              for (let i = 1; i < 16; i++) {
                if (recipe[`srtIngredient${i}`]) {
                  ingredients.push(recipe[`srtIngredient${i}`]);
                }
                ingredients.map((ingredient) => <li>{ingredient}</li>);
              }
            }} */}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="preparation">
        <p>{recipe.strInstructions}</p>
        <p>
          <strong>Enjoy !</strong>
        </p>
      </div>
    </div>
  );
};
export default Recipe;
