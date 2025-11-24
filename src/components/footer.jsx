import React from 'react';
import '../components/footer.css';

function Footer() {
  return (
    <footer className="footer-main-container">
      <div className="footer-main">
        {/* Logo & Description */}
        <div className="footer-logo-section">
          <img src="images/mindronlogo.jpg" alt="Mindron Foundation Logo" className="footer-logo" />
          <p className="footer-description">
            Mindron Foundation is a non-profit organization dedicated to improving healthcare access and wellness for communities in need
          </p>
        </div>
        {/* Quick Links */}
        <div className="footer-links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/helpdesk">Help Desk</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="footer-contact-section">
          <h4>Contact Info</h4>
          <div className="footer-contact-info">
            <span className="footer-bold">Address 1:</span> D-218, Agra Road Industrial Premises, Amrut Nagar, Behind R City Mall, Ghatkopar(west), Mumbai-400086.<br /><br />
            <span className="footer-bold">Address 2:</span> Office no. 404, 4th floor, Mukut Tower, Kursi Rd, Sector 2, Vikas nagar, Lucknow, Uttar Pradesh 226022.<br /><br />
            <span className="footer-bold">Phone no:</span> +91 8655972632/8056563493/9819866872<br />
            <span className="footer-bold">Gmail:</span> mindronfoundation@gmail.com<br />
            <span>Mon/Sat - 10:00/6:00</span>
          </div>
        </div>
        {/* Social Links */}
        <div className="footer-social-section">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/mindronfdn" target="_blank" rel="noopener noreferrer">
                <img src="/public/images/facebook.jpg" alt="Facebook" className="social-icon" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mindron_foundation?igsh=MTZyaGVjcnhjYTZ5eA==" target="_blank" rel="noopener noreferrer">
                <img src="/public/images/instagram.jpg" alt="Instagram" className="social-icon" />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/mindron-foundation/" target="_blank" rel="noopener noreferrer">
                <img src="/public/images/linkdin.jpg" alt="LinkedIn" className="social-icon" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/MindronFdn" target="_blank" rel="noopener noreferrer">
                <img src="/public/images/twitter.jpg" alt="Twitter" className="social-icon" />
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer bottom bar */}
      <div className="footer-bottom-bar">
        © 2025 Mindron Foundation. Terms and Conditions. Privacy Policy.
      </div>
    </footer>
  );
}

export default Footer;
