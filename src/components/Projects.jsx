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
                A clone of one of my favorite Italian restaurants in West Hartford, Connecticut. The website clone uses Blazor.NET to create a UI friendly copy of Treva's landing page.
                <a href="https://github.com/neilramch" target="_blank">View the project on GitHub</a>
              </p>
            </li>
            <li>
              Histopedia iOS App
              <img src="/h.png" alt="Histopedia" />
              <p>
                World Histopedia is a web and iOS application that allows users to interactively explore events throughout history.
                <a href="https://worldhistopedia.org/" target="_blank">Check it out in your browser</a>
              </p>
            </li>
            <li>
              Bible Journeys Study
              <img src="/biblejourneys.png" alt="Restaurant Clone" />
              <p>
                Bible Journeys is a website study that follows biblical events and figures according to the earliest manuscripts.
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
