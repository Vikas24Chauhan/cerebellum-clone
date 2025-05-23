import React from "react";
import "./ContactUs.css";
import { FaAddressCard, FaPhone, FaVoicemail } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="contactUs-container">
      <h1>Contact - Us</h1>
      <p>
        Cerebellum Academy is a top Medical Education Academy headquartered in
        New Delhi and is managed by top medical professionals of India. The
        Academy provides Face to Face Classes to medical professionals aspiring
        to work in India or abroad.
      </p>

      <div className="contactUs-info">
        <div className="contactUs-info-card">
          <div className="contactUs-info-logo">
            <FaAddressCard />
          </div>
          <div className="contactUs-info-content">
            <h5>ADDRESS :</h5>
            <h6>28, Second Floor, Vigyan Vihar, Delhi - 110092</h6>
          </div>
        </div>

        <div className="contactUs-info-card">
          <div className="contactUs-info-logo">
            <FaPhone />
          </div>
          <div className="contactUs-info-content">
            <h5>PHONE NO :</h5>
            <h6>+91 - 8800222009</h6>
          </div>
        </div>

        <div className="contactUs-info-card">
          <div className="contactUs-info-logo">
            <FaVoicemail />
          </div>
          <div className="contactUs-info-content">
            <h5>Email :</h5>
            <h6>support@cerebellumacademy.com</h6>
          </div>
        </div>

        <div className="contactUs-info-card">
          <div className="contactUs-info-logo">
            <FaAddressCard />
          </div>
          <div className="contactUs-info-content">
            <h5>Help Center</h5>
            <h6>Click Here</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
