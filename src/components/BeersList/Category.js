import "./Category.scss";

const Category = ({ name, selected, setSelected }) => {
  const onClickHandler = () => {
    setSelected(name);
  };

  return (
    <div
      className={`category ${selected === name ? "active" : ""}`}
      onClick={onClickHandler}
    >
      {name}
    </div>
  );
};

export default Category;
