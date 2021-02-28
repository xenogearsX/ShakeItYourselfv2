import { Link } from "react-router-dom";

const Suggestion = () => {
  return (
    <>
      <article id="proposition">
        <Link to="/cocktails/178345" className="cocktail">
          <h2>Cocktail of the Month</h2>
          <div className="imgCocktail">
            <img
              src="https://www.thecocktaildb.com/images/media/drink/ggx0lv1613942306.jpg"
              alt="cocktail Hot Toddie"
              width="400"
              height="350"
            />
          </div>
        </Link>
        <Link to="/cocktails/11008" className="cocktail">
          <h2>Favorite Cocktail</h2>
          <div className="imgCocktail">
            <img
              src="https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg"
              alt="cocktail manhattan"
              width="400"
              height="350"
            />
          </div>
        </Link>
      </article>
    </>
  );
};
export default Suggestion;
