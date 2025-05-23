import React from "react";
import "./Lectures.css";
import lectureImage from "../../assets/images/homeImages/recorded-lecture-image.webp";
import lectureIcon from "../../assets/images/homeImages/recorded-lecture-icon.png";

function Lectures() {
  return (
    <div className="lectures-container">
      <div className="lectures-image">
        <div className="lectures-shape-bg">
          <img src={lectureImage} alt="" className="lectures-main-img" />
        </div>
      </div>

      <div className="lectures-info">
        <img src={lectureIcon} alt="" />
        <h3>Recorded Lectures</h3>
        <p>
          - Diverse collection of recorded lectures, accessible through the
          cerebellum Academy app.
        </p>
        <p>- Available in English and Hinglish Language Both</p>
        <p>
          - Recorded lectures for all 19 subjects are designed for efficient
          review, helping you to maximize your study time.
        </p>
        <p>
          - Special focus on fruitful area and Previous Year Question (PYQs)
        </p>
        <p>- Enhances test taking skills and familiarity with exam formats.</p>
      </div>
    </div>
  );
}

export default Lectures;
