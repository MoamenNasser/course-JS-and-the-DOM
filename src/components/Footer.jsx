// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container">
      <p>© {new Date().getFullYear()} Your Site. All rights reserved.</p>
      <nav className="footer-nav">
        <a href="#privacy">Privacy</a> · <a href="#terms">Terms</a>
      </nav>
    </div>
  </footer>
);

export default Footer;