import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        {/* Logo Section */}
        <div className="navbar-section navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src="/images/mindronlogo.jpg" alt="Mindron Foundation Logo" />
          </NavLink>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className={`navbar-hamburger${menuOpen ? ' active' : ''}`}
          onClick={handleHamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
        </button>
        {/* Mobile Navigation */}
        <div className={`navbar-section navbar-links-mobile ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links" onClick={closeMenu}>
            <li>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={closeMenu}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/help" onClick={closeMenu}>Help Desk</NavLink>
            </li>
          </ul>
          <NavLink
            to="/donate"
            className="navbar-donate-mobile"
            onClick={closeMenu}
          >
            Donate
          </NavLink>
        </div>
        {/* Desktop Navigation */}
        <div className="navbar-section navbar-center">
          <ul className="navbar-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help Desk</NavLink>
            </li>
          </ul>
        </div>
        {/* Desktop Donate Button */}
        <div className="navbar-section navbar-right">
          <NavLink
            to="/donate"
            className="navbar-donate"
            onClick={closeMenu}
          >
            Donate
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
