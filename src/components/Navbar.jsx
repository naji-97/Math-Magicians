// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" data-testid="navbar-link-home">
          Math-MAG
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link
            to="/"
            className="navbar-item"
            data-testid="navbar-link-home"
          >
            Home
          </Link>
          <Link
            to="/calculator"
            className="navbar-item"
            data-testid="navbar-link-calculator"
          >
            Calculator
          </Link>
          <Link
            to="/quote"
            className="navbar-item"
            data-testid="navbar-link-quote"
          >
            Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
