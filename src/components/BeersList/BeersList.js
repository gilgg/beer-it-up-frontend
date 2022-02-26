import "./BeersList.scss";
import useFetchBeers from "../hooks/useFetchBeers";
import BeerCard from "./BeerCard";

const BeersList = ({ selected, setSelectedBeer }) => {
  const beers = useFetchBeers(selected);
  console.log("beers: ", beers);

  return (
    <div className="beers-list-container">
      <div className="beers-list">
        {beers.length > 0 &&
          beers.map((beer) => (
            <BeerCard
              key={beer.id}
              beer={beer}
              setSelectedBeer={setSelectedBeer}
            />
          ))}
      </div>
    </div>
  );
};

export default BeersList;
