import React from "react";
import "./Qbank.css";
import Image from "../../assets/images/homeImages/Qbank-image.webp";
import Icon from "../../assets/images/homeImages/Qbank-icon.png";

function Qbank() {
  return (
    <div className="Qbank-container">
      <div className="Qbank-info">
        <img src={Icon} alt="" />
        <h3>QBanks</h3>
        <p>- A vast Q. Bank for NEET PG, INI-CET, and FMGE preparation.</p>
        <p>- Q. Bank is regularly updated to reflect the latest exam.</p>
        <p>- Curated by expert faculty, includes over 50000+ questions.</p>
        <p>
          - Enhances test-taking skills and familiarizes students with exam
          formats.
        </p>
      </div>

      <div className="Qbank-image">
        <div className="Qbank-shape-bg">
          <img src={Image} alt="" className="Qbank-main-img" />
        </div>
      </div>
    </div>
  );
}

export default Qbank;
