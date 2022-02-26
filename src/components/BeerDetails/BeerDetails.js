import "./BeerDetails.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import MaltsList from "./MaltsList";

const BeerDetails = ({ beer }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onReturnHandler = (e) => {
    e.preventDefault();
    history.push("/beers");
    dispatch({ type: "REMOVE_BREADCRUMB" });
  };

  return (
    <div className="beer-details">
      <div className="beer-details-container">
        <img src={beer.image_url} alt="A beer" />
        <div className="beer-details-main">
          <h1 className="beer-details-main-title">{beer.name}</h1>
          <p className="beer-details-main-tagline">
            <i>{beer.tagline}</i>
          </p>
          <p className="beer-details-main-first-brewed">
            First brewed: {beer.first_brewed}
          </p>
          <p className="beer-details-main-desc">{beer.description}</p>
          <p className="beer-details-main-tips-title">Tips 💡:</p>
          <p className="beer-details-main-tips">{beer.brewers_tips}</p>
          <MaltsList maltsArr={beer.ingredients.malt} />
          <br />
          <button className="btn atc">Add to cart</button>
          <button className="btn return" onClick={onReturnHandler}>
            Return to Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;
