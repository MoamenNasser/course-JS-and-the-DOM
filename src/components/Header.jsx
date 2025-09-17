import React from "react";

const Header = () => (
  <header className="site-header">
    <div className="site-container">
      <a className="logo" href="/">
        <img src="/site-files/images/logo.png" alt="Site logo" />
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <ul>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
