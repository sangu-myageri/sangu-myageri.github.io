import React from 'react';
import './Experience.css'; // Assuming you have a separate CSS file for the Experience component

const Experience = () => {
  return (
    <div id="experience">
      <div className="container">
        <h2 style={{ textAlign: 'center' }} className="mb-5 maven-font heading">Experience</h2>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="cta-btn active"
              id="pills-indegene-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-indegene"
              type="button"
              role="tab"
              aria-controls="pills-indegene"
              aria-selected="true"
            >
              Indegene<span>, Benguluru | Aug 2023 - Present</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="cta-btn"
              id="pills-trinity-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-trinity"
              type="button"
              role="tab"
              aria-controls="pills-trinity"
              aria-selected="false"
            >
              Trinity<span>, Benguluru | July 2021 - Aug 2023</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="cta-btn"
              id="pills-creatisoul-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-creatisoul"
              type="button"
              role="tab"
              aria-controls="pills-creatisoul"
              aria-selected="false"
            >
              Creatisoul<span>, Benguluru | Oct 2020 - July 2021</span>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-indegene"
            role="tabpanel"
            aria-labelledby="pills-indegene-tab"
          >
            <p className="experience-year">Aug 2023 - Present</p>
            <ul>
              <li>Worked on SEO for Drupal application using Metatag, Simple XML Sitemap, Redirect and Pathauto modules.</li>
              <li>Improved content strategy and better digital marketing strategy using Adobe analytics.</li>
              <li>Dynamic pages creation using custom block types in node layout.</li>
              <li>Worked on Health Domain Drupal Websites for various countries.</li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="pills-trinity"
            role="tabpanel"
            aria-labelledby="pills-trinity-tab"
          >
            <p className="experience-year">July 2021 - Aug 2023</p>
            <ul>
              <li>Develop and maintain high-quality web applications using Drupal.</li>
              <li>Design and implement custom modules and functionalities to meet project requirements.</li>
              <li>Integrate third-party APIs for enhanced functionality and data exchange.</li>
              <li>Optimize website performance through caching, database tuning, and code optimization.</li>
              <li>Collaborate with front-end developers and designers to ensure seamless integration of front-end and back-end components.</li>
              <li>Conduct code reviews and provide technical guidance to junior developers.</li>
              <li>Troubleshoot and resolve issues related to website functionality, performance, and security.</li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="pills-creatisoul"
            role="tabpanel"
            aria-labelledby="pills-creatisoul-tab"
          >
            <p className="experience-year">Oct 2020 - July 2021</p>
            <ul>
              <li>Developed user interaction websites using HTML, CSS, JavaScript, jQuery, and Drupal.</li>
              <li>Ensured cross-device compatibility and responsive design principles.</li>
              <li>Collaborated with the team to deliver projects within deadlines.</li>
              <li>Assisted in troubleshooting and resolving website issues.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
