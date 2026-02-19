import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';
import wamsImage from '../assets/img/wams_website.png';
import wamsAboutImage from '../assets/img/wams_about.png';

const NAWams = () => {
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
              <li><Link to="/#web">Web</Link></li>
              <li><Link to="/#visual">Visual</Link></li>
              <li><Link to="/resume">Resume</Link></li>
            </ul>
          </nav>
        </FadeInSection>
      </header>

      <main>
        <FadeInSection>
          <section className="chapter">
            <div className="chapter-header">
              <span className="chapter-number">Web Development</span>
              <h2>NA-WAMS Symposium Website</h2>
              <p className="chapter-intro">
                A comprehensive conference platform for the North American WAMS Workshop—focused on advanced materials and manufacturing technologies for aerospace, defense, transportation, and energy. The site I built included agenda management, registration, and training session coordination.
              </p>
            </div>

            <section className="platform-overview">
              <h3>Project Overview</h3>
              <p>
                I developed this conference website for the North American WAMS (Workshop on Advanced Materials and Manufacturing) event. The platform was designed as a smaller-format workshop site with clear navigation for agenda, abstracts, exhibit and sponsor information, hotel and travel, and proceedings. Key deliverables included a responsive layout, agenda management and registration system,  built with HTML5, Bootstrap CSS, and JavaScript to keep the site maintainable and accessible across devices.
              </p>
            </section>

            <section className="tech-stack" style={{ marginBottom: '2rem' }}>
              <h3>Technologies Used</h3>
              <div className="tech-buttons" style={{ marginTop: '1.5rem' }}>
                <span className="tech-button">HTML5</span>
                <span className="tech-button">Bootstrap CSS</span>
                <span className="tech-button">JavaScript</span>
                <span className="tech-button">Responsive Design</span>
              </div>
            </section>

            <div className="platform-showcase">
              <div className="platform-image">
                <img
                  src={wamsImage}
                  alt="NA-WAMS Symposium website homepage"
                  className="rounded-image"
                />
                <div className="image-caption">
                  <p>Conference homepage and navigation</p>
                </div>
              </div>
            </div>

            <div className="platform-showcase" style={{ marginTop: '2rem' }}>
              <div className="platform-image">
                <img
                  src={wamsAboutImage}
                  alt="NA-WAMS About page with topic areas, quote, and mailing list sign-up"
                  className="rounded-image"
                />
                <div className="image-caption">
                  <p>About page: topic areas, quote block, and Stay Connected / mailing list CTA</p>
                </div>
              </div>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2rem' }}>
              The live site at <a href="https://www.wamsymposium.com" target="_blank" rel="noopener noreferrer" className="project-link">wamsymposium.com</a> has since been updated. This page describes the platform as I built it.
            </p>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
};

export default NAWams;
