import "./BeersPage.scss";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Categories from "../components/BeersList/Categories";
import BeersList from "../components/BeersList/BeersList";

const BeersPage = ({ setSelectedBeer }) => {
  const [selected, setSelected] = useState(""); // each category receives its own number according to its order, and 0 is all of the categories.

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
