import axios from "axios";
import { useState } from "react";
import CocktailCard from "./CocktailCard";

const Search = () => {
  const [searching,setSearching]=useState(true)
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [cocktails, setCocktails] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((res) => {
        setLoading(false);
        setCocktails(res.data);
        setSearching(false)
      });
  };
  const handleSearch = (e) => {
    setSearching(true)
    setSearch(e.target.value);
  };

  const getCocktails = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`
        )
        .then((res) => {
          setLoading(false);
          setCocktails(res.data);
          setSearching(false)
        });
    }
  };
  return (
    <div>
      <article id="choix">
        <section className="choisir">
          <form>
            <label>What's your poison ?</label>
            <input
              type="search"
              placeholder="Cocktail's ingredient"
              id="search"
              onChange={handleSearch}
              onKeyDown={getCocktails}
              value={search}
            />
            <button id="recherche" onClick={handleClick}>
              Discover
            </button>
          </form>
        </section>
      </article>
      {loading ? (
        <p>Loading...</p>
      ) : cocktails ? (
        <div className="cards">
          {cocktails.drinks.map((props) => (
            <CocktailCard
              key={props.idDrink}
              strDrinkThumb={props.strDrinkThumb}
              strDrink={props.strDrink}
              id={props.idDrink}
            />
          ))}
        </div>
      ) : null}
      {!cocktails ? !search ? null : searching? null:<div>Shake your own cocktail with {search} !</div> : null}
    </div>
  );
};
export default Search;
