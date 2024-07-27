import React from 'react';
import './Projects.css';
import superempackers from './../images/superem-packers-movers.png'
import opendata from './../images/opendata-portal.png'

const Projects = () => {
  const projects = [
    {
      href: "https://www.suprememoversandpacker.com/",
      imgSrc: superempackers,
      imgAlt: "Supreme Movers and Packer",
      imgTitle: "Supreme Movers and Packer",
      title: "Supreme Movers and Packer",
      description: "Packer and Movers Website"
    },
    {
      href: "https://opendata.cscl.co.in/",
      imgSrc: opendata,
      imgAlt: "Open Data Portal",
      imgTitle: "Open Data Portal",
      title: "Open Data Portal",
      description: "Portal to access the open data collections"
    },
    {
      href: "https://www.suprememoversandpacker.com/",
      imgSrc: superempackers,
      imgAlt: "Supreme Movers and Packer",
      imgTitle: "Supreme Movers and Packer",
      title: "Supreme Movers and Packer",
      description: "Packer and Movers Website"
    },
    {
      href: "https://opendata.cscl.co.in/",
      imgSrc: opendata,
      imgAlt: "Open Data Portal",
      imgTitle: "Open Data Portal",
      title: "Open Data Portal",
      description: "Portal to access the open data collections"
    },
  ];

  return (
    <div id="projects">
      <div>
        <h2 style={{ textAlign: 'center' }} className="mb-5 maven-font heading">Projects</h2>
        <div className="marquee">
          <div className="marquee-content">
            {projects.map((project, index) => (
              <a key={index} href={project.href} target="_blank" rel="noopener noreferrer" title={project.imgTitle}>
                <div className="marquee-item">
                  <div className="card project-card">
                    <div className="card-img-container">
                      <img
                        src={project.imgSrc}
                        className="card-img-top project-img"
                        alt={project.imgAlt}
                        title={project.imgTitle}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
            {/* Repeat project items to enable infinite scroll */}
            {projects.map((project, index) => (
              <a key={index + projects.length} href={project.href} target="_blank" rel="noopener noreferrer" title={project.imgTitle}>
                <div className="marquee-item">
                  <div className="card project-card">
                    <div className="card-img-container">
                      <img
                        src={project.imgSrc}
                        className="card-img-top project-img"
                        alt={project.imgAlt}
                        title={project.imgTitle}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
