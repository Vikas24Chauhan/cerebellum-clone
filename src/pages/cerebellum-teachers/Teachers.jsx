import React from "react";
import "./Teachers.css";
import TeachersBanner from "../../assets/images/teachers/Faculty-images-banner.jpg";
import teachersInfoData from "../../assets/data/teachersData";

function Teachers() {
  return (
    <div className="teachers-container">
      <div className="teachers-heading">
        <h1>Cerebellum Faculty</h1>
      </div>

      <div className="teachers-banner">
        <img src={TeachersBanner} alt="" />
      </div>

      <div className="teachers-info-cards">
        {teachersInfoData.map((data, index) => (
          <div key={index} className="teachers-info-card">
            <img src={data.image} alt="" />
            <h3>{data.name}</h3>
            <h5>{data.prof}</h5>
            <span>Know More</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
