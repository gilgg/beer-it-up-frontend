import "./BeersPage.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BeersList from "../components/BeersList/BeersList";
import Categories from "../components/BeersList/Categories";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const BeersPage = ({ setSelectedBeer }) => {
  const [selected, setSelected] = useState(""); // each category receives its own number according to its order, and 0 is all of the categories.
  const dispatch = useDispatch();

  return (
    <div className="beers-page">
      <Breadcrumbs />
      <h1 className="beers-page-title">Beers Catalog</h1>
      <Categories selected={selected} setSelected={setSelected} />
      <BeersList selected={selected} setSelectedBeer={setSelectedBeer} />
    </div>
  );
};

export default BeersPage;
