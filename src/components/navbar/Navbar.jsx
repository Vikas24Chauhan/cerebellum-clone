import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/CBA-Web-Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={Logo} alt="website logo" />
        </NavLink>
      </div>

      <nav className={showNav ? "mobile-nav" : "web-nav"}>
        <NavLink to="/" onClick={handleCloseNav}>
          Home
        </NavLink>
        <NavLink to="/cerebellum-teachers" onClick={handleCloseNav}>
          Cerebellum Teachers
        </NavLink>
        <NavLink to="/offline-courses" onClick={handleCloseNav}>
          Offline Courses
        </NavLink>
        <NavLink to="/plans" onClick={handleCloseNav}>
          Plans
        </NavLink>
        <NavLink to="/premium-notes" onClick={handleCloseNav}>
          Premium Notes
        </NavLink>
        <NavLink to="/schedules" onClick={handleCloseNav}>
          Schedules
        </NavLink>
        <NavLink to="/announcements" onClick={handleCloseNav}>
          Announcements
        </NavLink>
        <NavLink to="/blogs" onClick={handleCloseNav}>
          Blogs
        </NavLink>
      </nav>

      <div className="hamburger">
        <button className="hamburger-btn" onClick={handleButtonToggle}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
