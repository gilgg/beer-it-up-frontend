import "./Breadcrumbs.scss";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
  const breadcrumbs = useSelector((state) => state.breadcrumbs);

  return (
    <div className="breadcrumbs">
      <p>{breadcrumbs.join(" > ")}</p>
    </div>
  );
};

export default Breadcrumbs;
