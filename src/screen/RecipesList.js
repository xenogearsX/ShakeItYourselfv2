import axios from "axios";
import { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";

const RecipesList = () => {
  const [current, setCurrent] = useState("A");
  const [cocktails, setCocktails] = useState(null);
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const handleClick = async (e) => {
    setCurrent(e.target.textContent);
  };
  useEffect(
    () =>
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${current}`
        )
        .then((res) => {
          setCocktails(res.data.drinks);
        }),
    [current]
  );

  return (
    <div className="recipes">
      <ul className="letters">
        {letters.map((letter) => (
          <li key={letter} onClick={handleClick}>
            {letter}
          </li>
        ))}
      </ul>
      <div className="cards">
        {cocktails
          ? cocktails.map((cocktail) => (
              <CocktailCard
                key={cocktail.idDrink}
                strDrinkThumb={cocktail.strDrinkThumb}
                strDrink={cocktail.strDrink}
                id={cocktail.idDrink}
              />
            ))
          : null}
      </div>
      {cocktails ? null : <div className="cards">Sorry. No cocktail begining with {current}. Create your own !</div>}
    </div>
  );
};
export default RecipesList;
