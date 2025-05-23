import React from "react";
import "./Batch.css";
import batchData from "../../assets/data/batchData";
import { NavLink } from "react-router-dom";

function Batch() {
  return (
    <div className="batch-container">
      {batchData.map((data, index) => (
        <div key={index} className="batch-card">
          <div className="batch-info">
            <h2>{data.newBatch}</h2>
            <h3>{data.batchName}</h3>
            <h4>{data.batchTag}</h4>
          </div>

          <div className="batch-btn">
            <NavLink>{data.enroll}</NavLink>
          </div>
        </div>
      ))}

      <div className="extra-batch">
        <div className="batch-card2">
          <h3>BTR by Dr. Zainab Vora</h3>
          <h4>To Know Program Details</h4>
          <NavLink>Click Here</NavLink>
        </div>

        <h2>
          Learn From Legendary Faculties at Cerebellum Where Your Course
          Completion is Their Responsibility
        </h2>

        <NavLink>Enrol Now</NavLink>
      </div>
    </div>
  );
}

export default Batch;
