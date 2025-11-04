import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburger = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO - left */}
        <div className="navbar-section navbar-logo">
          <a href="/">
            <img src="/images/mindronlogo.jpg" alt="Mindron Foundation Logo" />
          </a>
        </div>

        {/* Hamburger icon - shown on mobile */}
        <button className="navbar-hamburger" onClick={handleHamburger} aria-label="Open menu">
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
        </button>

        {/* MENU - center/right */}
        <div className={`navbar-section navbar-links-mobile ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links" onClick={closeMenu}>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/help">Help Desk</a></li>
          </ul>
          <a href="/donate" className="navbar-donate-mobile" onClick={closeMenu}>Donate</a>
        </div>

        {/* MENU - desktop */}
        <div className="navbar-section navbar-center">
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/help">Help Desk</a></li>
          </ul>
        </div>

        {/* DONATE BUTTON - desktop */}
        <div className="navbar-section navbar-right">
          <a href="/donate" className="navbar-donate">Donate</a>
        </div>
      </div>
    </nav>
  );
}
