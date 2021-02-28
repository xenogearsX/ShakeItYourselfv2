import { Link } from "react-router-dom";

const CocktailCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={props.strDrinkThumb}
          className="card-img"
          alt={props.strDrink}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.strDrink}</h2>
        <Link to={`/cocktails/${props.id}`} className="card-button">
          Shake It Yourself
        </Link>
      </div>
    </div>
  );
};
export default CocktailCard;
