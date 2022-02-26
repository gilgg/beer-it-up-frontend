import "./Categories.scss";
import Category from "./Category";

const Categories = ({ selected, setSelected }) => {
  return (
    <div className="categories">
      <Category
        name="Extra Pale"
        selected={selected}
        setSelected={setSelected}
      />
      <Category
        name="Caramalt"
        selected={selected}
        setSelected={setSelected}
      />
      <Category
        name="Munich"
        selected={selected}
        setSelected={setSelected}
      />
      <Category
        name="Dark Crystal"
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default Categories;
