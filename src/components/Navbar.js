import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We will add CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={require('../assets/logo.png')} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/AboutBat">About Bat</Link>
        </li>
        <li>
          <Link to="/darkknight">Dark Knight</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
      </ul>
     
    </nav>
  );
};

export default Navbar;
