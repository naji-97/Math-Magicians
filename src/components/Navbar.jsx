// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Math-MAG</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/calculator" className="navbar-item">Calculator </Link>
          <Link to="/quote" className="navbar-item">Quote</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
