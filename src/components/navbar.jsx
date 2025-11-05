import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Instead of <a>
import './navbar.css';
import Donatemodel from '../pages/Donatemodel';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  const handleHamburger = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowDonate(true);
    closeMenu();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-section navbar-logo">
            <NavLink to="/">
              <img src="/images/mindronlogo.jpg" alt="Mindron Foundation Logo" />
            </NavLink>
          </div>
          <button className="navbar-hamburger" onClick={handleHamburger} aria-label="Open menu">
            <span className="navbar-hamburger-bar"></span>
            <span className="navbar-hamburger-bar"></span>
            <span className="navbar-hamburger-bar"></span>
          </button>
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
            <a href="/donate" className="navbar-donate-mobile" onClick={handleDonateClick}>Donate</a>
          </div>
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
          <div className="navbar-section navbar-right">
            <a href="/donate" className="navbar-donate" onClick={handleDonateClick}>Donate</a>
          </div>
        </div>
      </nav>
      {showDonate && <Donatemodel onClose={() => setShowDonate(false)} />}
    </>
  );
}
