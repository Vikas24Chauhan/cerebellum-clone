import React from "react";
import "./LogIn.css";
import { FaWhatsapp } from "react-icons/fa";

function LogIn() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Let's get started</h1>
        <p>
          Enter your mobile number to Sign up/Sign in to your Cerebellum account
        </p>

        <div className="login-input-group">
          <select className="country-code">
            <option value="+91">+91 (IN)</option>
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (AU)</option>
          </select>

          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="mobile-input"
          />
        </div>

        <button type="submit" className="login-btn">
          Continue
        </button>
        <h6>OR</h6>

        <div className="whatsapp-logo">
          <FaWhatsapp />
        </div>

        <p>
          By signing up, you agree to Terms & Conditions and Privacy Policy of
          Cerebellum
        </p>
      </div>
    </div>
  );
}

export default LogIn;
