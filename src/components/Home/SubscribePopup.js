import "./SubscribePopup.scss";

const SubscribePopup = ({ showPopup, setShowPopup }) => {
  return (
    <div className={`subscribe-popup ${showPopup ? "active" : ""}`}>
      <div className="subscribe-popup-msg">
        <h1 className="subscribe-popup-msg-title">Thank you for subscribing</h1>
        <button className="subscribe-popup-msg-btn" onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default SubscribePopup;
