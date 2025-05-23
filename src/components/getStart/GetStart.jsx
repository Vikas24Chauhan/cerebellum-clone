import React from "react";
import "./GetStart.css";
import appStore from "../../assets/images/appstore.png";
import googlePlay from "../../assets/images/gplay.png";
import iPhoneImage from "../../assets/images/homeImages/iPhone-Mockup.webp";
import { NavLink } from "react-router-dom";

function GetStart() {
  return (
    <div className="getStart-container">
      <h4>Get Set Ready</h4>
      <h1>Start Your Preparation Today</h1>
      <p>
        Our platform is your ultimate solution for NEET PG, INI-CET, and FMGE
        success. With tailored resources and expert guidance, we’re here to help
        you achieve your dreams.
      </p>
      <h3>
        Join us and take the first step towards a brilliant medical career.
      </h3>

      <div className="getStart-store">
        <NavLink to="https://play.google.com/store/apps/details?id=com.cerebellummobileapp">
          <img src={googlePlay} alt="" />
        </NavLink>
        <NavLink to="https://apps.apple.com/in/app/cerebellum-neet-pg-inicet-fmge/id1662462131">
          <img src={appStore} alt="" />
        </NavLink>
      </div>

      <div className="getStart-links">
        <NavLink to="https://play.google.com/store/apps/details?id=com.cerebellummobileapp&hl=en_IN">
          NEET PG Preparation Android app
        </NavLink>
        <NavLink to="https://apps.apple.com/in/app/cerebellum-neet-pg-inicet-fmge/id1662462131">
          NEET PG Preparation iOS app
        </NavLink>
        <NavLink to="https://apps.apple.com/in/app/cerebellum-neet-pg-inicet-fmge/id1662462131">
          NEET PG Preparation iphone app
        </NavLink>
      </div>

      <div className="getStart-iPhone-image">
        <img src={iPhoneImage} alt="" />
      </div>
    </div>
  );
}

export default GetStart;
