import "./BeerCard.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const BeerCard = ({ beer, setSelectedBeer }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    history.push(`/beers/${beer.id}`);
    setSelectedBeer(beer);
    dispatch({ type: "ADD_BREADCRUMB", breadcrumb: `${beer.name}` });
  };

  return (
    <div className="beer-card">
      <img src={beer.image_url} alt="" />
      <p>{beer.name}</p>
      <button onClick={onClickHandler}>Learn More</button>
    </div>
  );
};

export default BeerCard;
