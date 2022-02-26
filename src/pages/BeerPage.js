import "./BeerPage.scss";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import BeerDetails from "../components/BeerDetails/BeerDetails";

const BeerPage = ({ beer }) => {
  return (
    <div className="beer-page">
      <Breadcrumbs />
      <BeerDetails beer={beer} />
    </div>
  );
};

export default BeerPage;
