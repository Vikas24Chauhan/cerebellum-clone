import React from "react";
import "./MockTest.css";
import mockImage from "../../assets/images/homeImages/mock-test-image.webp";
import mockIcon from "../../assets/images/homeImages/mock-test-icon.png";

function MockTest() {
  return (
    <div className="mock-test-container">
      <div className="mock-test-info">
        <img src={mockIcon} alt="" />
        <h3>Original Exam Simulated E&Ds and Grand Tests</h3>
        <p>
          - Experience a unique exam simulation with in- app live E&Ds and Grand
          Tests
        </p>
        <p>
          - This unique feature simulates the environment under which NEET PG,
          INI-CET, and FMGE exams are set.
        </p>
      </div>

      <div className="mock-test-image">
        <div className="mock-test-shape-bg">
          <img src={mockImage} alt="" className="mock-test-main-img" />
        </div>
      </div>
    </div>
  );
}

export default MockTest;
