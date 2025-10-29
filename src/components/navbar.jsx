import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO - left */}
        <div className="navbar-section navbar-logo">
          <a href="/">
            <img src="/images/mindronlogo.jpg" alt="Mindron Foundation Logo" />
          </a>
        </div>

        {/* MENU - center */}
        <div className="navbar-section navbar-center">
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/help">Help Desk</a></li>
          </ul>
        </div>

        {/* DONATE BUTTON - right */}
        <div className="navbar-section navbar-right">
          <a href="/donate" className="navbar-donate">Donate</a>
        </div>
      </div>
    </nav>
  );
}
