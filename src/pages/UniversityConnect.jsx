import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';
import ucHomepage from '../assets/img/uc_homepage.jpeg';

const UniversityConnect = () => {
  useEffect(() => {
    document.documentElement.classList.remove('theme-light');
    document.documentElement.classList.add('theme-dark');
  }, []);

  return (
    <div className="app">
      <SparkleTrail />
      <header>
        <FadeInSection>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#web">Web</a></li>
              <li><a href="/#visual">Visual</a></li>
              <li><a href="/#written">Written</a></li>
            </ul>
          </nav>
        </FadeInSection>
      </header>

      <main>
        <FadeInSection>
          <section className="platform-intro">
            <h3>University Connect Platform</h3>
            <p>
              A comprehensive platform designed to streamline communication and resource sharing between universities and their students. 
              The platform features a modern, intuitive interface that makes it easy for users to find and access the information they need.
            </p>
          </section>

          <section className="platform-overview">
            <h3>Project Overview</h3>
            <p>
              As part of the development team, I contributed to the front-end implementation of the platform, 
              focusing on creating responsive layouts and interactive components that enhance the user experience.
            </p>
          </section>

          <div className="platform-grid">
            <div className="platform-showcase">
              <div className="platform-image">
                <img 
                  src={ucHomepage} 
                  alt="University Connect Platform Homepage"
                  className="rounded-image"
                />
                <div className="image-caption">
                  <p>The redesigned homepage featuring the new color scheme and improved UI elements</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </main>
    </div>
  );
};

export default UniversityConnect; 