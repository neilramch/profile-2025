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
              <p>
                <a href="https://github.com/neilramch" target="_blank">View the project on GitHub</a>
              </p>
            </li>
            <li>
              Histopedia iOS App
              <img src="/h.png" alt="Histopedia" />
              <p>
                <a href="https://worldhistopedia.org/" target="_blank">Check it out in your browser</a>
              </p>
            </li>
            <li>
              Bible Journeys Study
              <img src="/biblejourneys.png" alt="Restaurant Clone" />
              <p>
                <a href="https://biblejourneys.netlify.app" target="_blank">Check it out in your browser</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

}

export default Projects;
