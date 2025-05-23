import React from "react";
import "./BTR.css";
import Image from "../../assets/images/homeImages/BTR-image.webp";
import Icon from "../../assets/images/homeImages/BTR-icon.png";

function BTR() {
  return (
    <div className="BTR-container">
      <div className="BTR-info">
        <img src={Icon} alt="" />
        <h3>BTR</h3>
        <p>
          - Buri Tarha Ratto AKA Belief Toh Rakho by Dr. Zainab Vora focuses on
          fruitful topics & PYQs across all 19 subjects.
        </p>
        <p>
          - You will always be ready to answer the questions in the NEET PG,
          INI-CET, and FMGE tests if you follow this Strategy.
        </p>
      </div>

      <div className="BTR-image">
        <div className="BTR-shape-bg">
          <img src={Image} alt="" className="BTR-main-img" />
        </div>
      </div>

      {/* <span>
        All these programs are tailored to suit our students, so every learner
        will get something of their choice based on the preferences and goals
        set. With your dedication and guidance by experts, succeeding in exams
        is within your reach. You are welcome to be part of us and embark on an
        academic voyage leading to excellence!
      </span> */}
    </div>
  );
}

export default BTR;
