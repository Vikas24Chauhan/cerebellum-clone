import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaLinkedin,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
import FooterIcon from "../../assets/images/footer-icon.webp";
import AppStore from "../../assets/images/appstore.png";
import GPlay from "../../assets/images/gplay.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-quick-links">
        <div className="footer-icons-div">
          <img src={FooterIcon} alt="" />
          <h5>For The Students By The Teachers</h5>
          <hr />
          <h4>Our Social Media presence</h4>
          <div className="footer-social-media">
            <NavLink
              to="https://www.youtube.com/@cerebellumacademy"
              target="_blank"
            >
              <FaYoutube />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/cerebellumacademy/"
              target="_blank"
            >
              <FaInstagram />
            </NavLink>
            <NavLink to="https://t.me/GroupCerebellumAcademy" target="_blank">
              <FaTelegram />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/cerebellumacademy/"
              target="_blank"
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/company/cerebellum-academy/"
              target="_blank"
            >
              <FaLinkedin />
            </NavLink>
          </div>
          <div className="footer-store">
            <img src={GPlay} alt="" />
            <img src={AppStore} alt="" />
          </div>
        </div>

        <div className="quick-link-pages">
          <h2>QUICK LINKS</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cerebellum Teachers</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cancellation Policy</li>
            <li>Contact Us</li>
            <li>Important Polices</li>
            <li>Fair Usage Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-offline-course">
        <h2>OFFLINE COURSES</h2>
        <ul>
          <li>The Champion's Batch 2.O - Regular Batch</li>
        </ul>
        <div className="footer-email-card">
          <h5>Your Emails</h5>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="footer-contact-us">
        <h2>Contact Us</h2>
        <div className="footer-contact-info">
          <FaPhone /> <h4>+91 95602 00184</h4>
        </div>
        <div className="footer-contact-info">
          <FaPhone /> <h4>support@cerebellumacademy.com</h4>
        </div>
        <div className="footer-contact-info">
          <FaPhone /> <h4>Help Center</h4>
        </div>
        <div className="footer-contact-info">
          <FaPhone />
          <h4>
            Delhi Office Address:- 28, Second Floor, Vigyan Vihar, Delhi -
            110092
          </h4>
        </div>
        <div className="footer-contact-info">
          <FaPhone />
          <h4>
            Hyderabad office address:- Cerebellum Academy, 2nd Floor,
            6-1-280/2A, Bajjuri Plaza, Beside Park, Padmarao Nagar,
            Secunderabad, Telangana 500025
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
