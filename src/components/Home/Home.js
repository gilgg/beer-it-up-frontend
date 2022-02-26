import "./Home.scss";
import { useState } from "react";
import SubscribeCard from "./SubscribeCard";
import SubscribePopup from "./SubscribePopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="home">
      <SubscribeCard setShowPopup={setShowPopup} />
      <SubscribePopup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default Home;
