import React from "react";
import "./TopperFMGE.css";
import topper1 from "../../assets/images/topperFMGE/topper1.webp";
import topper2 from "../../assets/images/topperFMGE/topper2.webp";
import topper3 from "../../assets/images/topperFMGE/topper3.webp";
import topper4 from "../../assets/images/topperFMGE/topper4.webp";
import topper5 from "../../assets/images/topperFMGE/topper5.webp";
import topper6 from "../../assets/images/topperFMGE/topper6.webp";
import topper7 from "../../assets/images/topperFMGE/topper7.webp";
import topper8 from "../../assets/images/topperFMGE/topper8.webp";
import topper9 from "../../assets/images/topperFMGE/topper9.webp";
import topper10 from "../../assets/images/topperFMGE/topper10.webp";

function TopperFMGE() {
  return (
    <div className="fmge-container">
      <h1>Top scorers in FMGE january 2025</h1>

      <div className="fmge-card">
        <img src={topper1} alt="topper image" />
        <img src={topper2} alt="topper image" />
        <img src={topper3} alt="topper image" />
        <img src={topper4} alt="topper image" />
        <img src={topper5} alt="topper image" />
        <img src={topper6} alt="topper image" />
        <img src={topper7} alt="topper image" />
        <img src={topper8} alt="topper image" />
        <img src={topper9} alt="topper image" />
        <img src={topper10} alt="topper image" />
      </div>
    </div>
  );
}

export default TopperFMGE;
