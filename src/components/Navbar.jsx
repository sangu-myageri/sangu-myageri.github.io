import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import darkModeSvg from './../images/dark-mode.svg';
import lightModeSvg from './../images/light-mode.svg';
import DarkModeContext from '../context/DarkModeContext';

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);


  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-nav ${isDarkMode ? 'dark-mode' : ''}`} aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand" to="/" title="Sangamesh Myageri">
          <span className="full-name">SANGAMESH MYAGERI</span>
          <span className="initials">SM</span>
        </Link>
        <p className="job-role">Web Developer</p>
        <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse offcanvas-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" title="Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#about" title="About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience" title="Experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" title="Projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" title="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <a href="#" id="dark-mode-toggle" onClick={toggleDarkMode}>
          <img src={isDarkMode ? lightModeSvg : darkModeSvg} alt="Dark Mode Toggle" />
        </a>        
      </div>
    </nav>
  );
};

export default Navbar;
