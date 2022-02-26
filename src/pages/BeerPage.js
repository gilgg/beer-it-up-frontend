import "./BeerPage.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import MaltsList from "../components/BeerDetails/MaltsList";

const BeerPage = ({ beer }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const breadcrumbs = useSelector((state) => state.breadcrumbs);

  const onReturnHandler = (e) => {
    e.preventDefault();
    history.push("/beers");
    dispatch({ type: "REMOVE_BREADCRUMB" });
  };

  return (
    <div className="beer-page">
      <Breadcrumbs />
      <div className="beer-page-bottom">
        <div className="beer-page-container">
          <img src={beer.image_url} alt="A beer" />
          <div className="beer-page-details">
            <h1 className="beer-page-details-title">{beer.name}</h1>
            <p className="beer-page-details-tagline">
              <i>{beer.tagline}</i>
            </p>
            <p className="beer-page-details-first-brewed">
              First brewed: {beer.first_brewed}
            </p>
            <p className="beer-page-details-desc">{beer.description}</p>
            <p className="beer-page-details-tips-title">Tips 💡:</p>
            <p className="beer-page-details-tips">{beer.brewers_tips}</p>
            <MaltsList maltsArr={beer.ingredients.malt} />
            <br />
            <button className="btn atc">Add to cart</button>
            <button className="btn return" onClick={onReturnHandler}>
              Return to Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerPage;
