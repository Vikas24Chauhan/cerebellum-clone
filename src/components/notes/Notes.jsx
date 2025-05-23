import React from "react";
import "./Notes.css";
import notesImage from "../../assets/images/homeImages/notes-image.webp";
import notesIcon from "../../assets/images/homeImages/notes-icon.png";

function Notes() {
  return (
    <div className="notes-container">
      <div className="notes-image">
        <div className="notes-shape-bg">
          <img src={notesImage} alt="" className="notes-main-img" />
        </div>
      </div>

      <div className="notes-info">
        <img src={notesIcon} alt="" />
        <h3>Printed Hard Copy Notes</h3>
        <p>- Comprehensive Set: 15 printed books covering all 19 subjects</p>
        <p>
          - Expertly Derived: From our Main Video Lectures for in-depth
          understanding
        </p>
        <p>
          - High-Yield Focus: Covers all essential topics for NEET PG, INI CET,
          and FMGE
        </p>
        <p>
          - Curated by Legends: Prepared by the renowned faculties of Cerebellum
          Academy
        </p>
        <p>- Grasp complex topics in the most memorable way.</p>
      </div>
    </div>
  );
}

export default Notes;
