import React from "react";
import "./HelpCenter.css";
import BolbImage from "../../assets/images/bolb-image.png";

function HelpCenter() {
  return (
    <div>
      <div className="help-container">
        <div className="help-banner">
          <h1>Help Center</h1>
        </div>
      </div>

      <div className="help-image">
        <img src={BolbImage} alt="" />
      </div>
    </div>
  );
}

export default HelpCenter;
