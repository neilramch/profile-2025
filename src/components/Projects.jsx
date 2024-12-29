import React, { useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  // Use a ref to reference the `ul` element
  const ulRef = useRef(null);

  useEffect(() => {
    const ul = ulRef.current; // Access the `ul` element
    const scrollAmount = ul.offsetWidth / 2; // Scroll by half the container width

    const handleScrollLeft = () => {
      ul.scrollTo({
        left: ul.scrollLeft - scrollAmount,
        behavior: 'smooth',
      });
    };

    const handleScrollRight = () => {
      ul.scrollTo({
        left: ul.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    };

    // Select buttons and attach event listeners
    const leftButton = document.querySelector('.scroll-btn.left');
    const rightButton = document.querySelector('.scroll-btn.right');

    leftButton.addEventListener('click', handleScrollLeft);
    rightButton.addEventListener('click', handleScrollRight);

    // Cleanup listeners when the component unmounts
    return () => {
      leftButton.removeEventListener('click', handleScrollLeft);
      rightButton.removeEventListener('click', handleScrollRight);
    };
  }, []);

  return (
    <div>
      <div id="projects" className="projects-container">
        <h3>Projects</h3>

        <button className="scroll-btn left">◀</button>

        <div className="projects-box">
          <ul ref={ulRef}>
            <li>
              Restaurant Clone
              <img src="/Treva.png" alt="Restaurant Clone" />
            </li>
            <li>
              Restaurant Clone
              <img src="/Treva.png" alt="Restaurant Clone" />
            </li>
            <li>
              Histopedia iOS App
              <img src="/h.png" alt="Histopedia" />
              <p>
                <a href="https://worldhistopedia.org/">Check it out in your browser!</a>
              </p>
            </li>
            <li>
              Histopedia iOS App
              <img src="/h.png" alt="Histopedia" />
              <p>
                <a href="https://worldhistopedia.org/">Check it out in your browser!</a>
              </p>
            </li>
            <li>
              Histopedia iOS App
              <img src="/h.png" alt="Histopedia" />
              <p>
                <a href="https://worldhistopedia.org/">Check it out in your browser!</a>
              </p>
            </li>
          </ul>
        </div>
        <button className="scroll-btn right">
          ▶
        </button>
      </div>
    </div>
  );
}

export default Projects;
