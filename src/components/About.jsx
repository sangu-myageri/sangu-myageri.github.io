import React from 'react';
import './About.css';
import profileImage from './../images/profile-Photoroom.jpg';


const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="about-circle-img">
              <img
                src={ profileImage }
                alt="Sangamesh Myageri"
                title="Sangamesh Myageri"
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="about-lines-wrapper">
              <div className="about-line-1">Hi, my name is</div>
              <h2 className="about-line-2">Sangamesh Myageri.</h2>
              <h3 className="about-line-3">I build things for the web.</h3>
              <div className="about-line-4">
                I’m a web developer specializing in building exceptional digital experiences.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
