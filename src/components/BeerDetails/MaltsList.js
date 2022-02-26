import "./MaltsList.scss";
import Malt from "./Malt";

const MaltsList = ({ maltsArr }) => {
  return (
    <div className="malts-list">
      {maltsArr.map((malt, index) => (
        <Malt key={index} maltName={malt.name} />
      ))}
    </div>
  );
};

export default MaltsList;
