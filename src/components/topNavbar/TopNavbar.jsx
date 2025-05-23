import React from "react";
import "./TopNavbar.css";
import {
  FaUser,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function TopNavbar() {
  return (
    <div className="topNavbar-container">
      <div className="topNavbar-contact">
        <NavLink to="/contact-us">
          <FaUser />
          <span>Contact Us</span>
        </NavLink>

        <div>
          <FaPhone />
          <span>+91 9560200184</span>
        </div>

        <NavLink to="https://www.facebook.com/cerebellumacademy">
          <FaFacebook />
        </NavLink>
        <NavLink to="https://www.instagram.com/cerebellumacademy/">
          <FaInstagram />
        </NavLink>
        <NavLink to="https://www.youtube.com/@cerebellumacademy">
          <FaYoutube />
        </NavLink>
      </div>

      <div className="topNavbar-btns">
        <NavLink to="/help-center" className="topNavbar-btn1">
          Help Center
        </NavLink>
        <NavLink to="/login" className="topNavbar-btn2">
          Login
        </NavLink>
        <NavLink to="/faqs" className="topNavbar-btn3">
          FAQ's
        </NavLink>
      </div>
    </div>
  );
}

export default TopNavbar;
