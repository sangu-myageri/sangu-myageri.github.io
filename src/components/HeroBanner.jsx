import React from 'react';
import './../components/HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="container">
        <h1>Crafting Excellence with Web Development</h1>
        <a href="/#projects" className="cta-btn" title="Explore My Work">
          Explore My Work
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
