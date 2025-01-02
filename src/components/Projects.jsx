import React from 'react';
import './Projects.css';

function Projects() {
  

  return (
    <div>
      <div id="projects" className="projects-container">
        <h3>Projects</h3>

        <div className="projects-box">
          <ul>
            <li>
              Restaurant Clone
              <img src="/Treva.png" alt="Restaurant Clone" />
            </li>
            <li>
              Histopedia iOS App
              <img src="/h.png" alt="Histopedia" />
              <p>
                <a href="https://worldhistopedia.org/">Check it out in your browser</a>
              </p>
            </li>
            <li>
              Bible Journeys Study
              <img src="/biblejourneys.png" alt="Restaurant Clone" />
              <p>
                <a href="https://biblejourneys.netlify.app">Check it out in your browser</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

}

export default Projects;
