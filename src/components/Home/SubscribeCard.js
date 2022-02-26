import "./SubscribeCard.scss";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SubscribeCard = ({ setShowPopup }) => {
  console.log("in subscribeCard");
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubscribeHandler = (e) => {
    e.preventDefault();
    const email = inputRef.current.value;
    inputRef.current.value = "";
    if (email) {
      setIsSubscribed(true);
    }
    setShowPopup(true);
  };

  const onGoToBeersHandler = () => {
    dispatch({ type: "ADD_BREADCRUMB", breadcrumb: "Beers Catalog" });
  };

  return (
    <div className="subscribe-card">
      <Link
        className="subscribe-card-link"
        to="/beers"
        onClick={onGoToBeersHandler}
      >
        Click here to see our beer catalog
      </Link>
      <label className="subscribe-card-label" htmlFor="subscribe">
        Subscribe to our mailing list
      </label>
      <input
        type="email"
        className="subscribe-card-input"
        id="subscribe"
        ref={inputRef}
        required
        placeholder="Enter you email"
      />
      {!isSubscribed && (
        <button className="subscribe-card-btn" onClick={onSubscribeHandler}>
          Subscribe
        </button>
      )}
      {isSubscribed && (
        <button
          className="subscribe-card-btn-subscribed"
          onClick={onSubscribeHandler}
        >
          Subscribed!
        </button>
      )}
    </div>
  );
};

export default SubscribeCard;
