import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="menu">
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/howto">How To</Link>
        </li>
        <li>
          <Link to="/cocktails/178345">Recette de saison</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
