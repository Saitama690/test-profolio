import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path to your CSS file is correct

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <ul>
        <li>
          <Link to="/" className="navbar-button">Home</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-button">About</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-button">Contact Me</Link> {/* New Contact Me button */}
        </li>
        <li>
          <button onClick={toggleTheme} className="navbar-button">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
