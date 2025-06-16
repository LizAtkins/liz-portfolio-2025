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
              <li><Link to="/#web">Web</Link></li>
              <li><Link to="/#visual">Visual</Link></li>
              <li><Link to="/#written">Written</Link></li>
            </ul>
          </nav>
        </FadeInSection>
      </header>

      <main>
        <FadeInSection>
          <section className="chapter">
            <div className="chapter-header">
              <span className="chapter-number">Web Development</span>
              <h2>University Connect Platform</h2>
              <p className="chapter-intro">
                A comprehensive platform designed to streamline communication and resource sharing between universities and their students. 
                The platform features a modern, intuitive interface that makes it easy for users to find and access the information they need.
              </p>
            </div>

            <section className="platform-overview">
              <h3>Project Overview</h3>
              <p>
                As part of the development team, I contributed to the front-end implementation of the platform, 
                focusing on creating responsive layouts and interactive components that enhance the user experience.
                Key improvements included streamlining the navigation, restructuring the features using Material Design, 
                and implementing a more intuitive user interface and simplified call-to-action elements. 
                The redesign removed unnecessary complexity while maintaining a professional and modern appearance.
              </p>
            </section>

            <section className="tech-stack" style={{ marginBottom: '3rem' }}>
              <h3>Technologies Used</h3>
              <div className="tech-buttons" style={{ marginTop: '1.5rem' }}>
                <span className="tech-button">Angular</span>
                <span className="tech-button">TypeScript</span>
                <span className="tech-button">Tailwind CSS</span>
                <span className="tech-button">Prisma</span>
                <span className="tech-button">Node.js</span>
              </div>
            </section>

            <div className="platform-details" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="color-palette">
                <h3>Color Palette</h3>
                <div className="color-swatches">
                  <div className="color-swatch">
                    <div className="swatch uc-primary-red"></div>
                    <span className="color-name">Primary Red</span>
                    <span className="color-hex">#E63946</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch uc-dark-red"></div>
                    <span className="color-name">Dark Red</span>
                    <span className="color-hex">#B81D3A</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch uc-light-red"></div>
                    <span className="color-name">Light Red</span>
                    <span className="color-hex">#FF6B6B</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch uc-light-pink"></div>
                    <span className="color-name">Light Pink</span>
                    <span className="color-hex">#FBD1DB</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch uc-primary-blue"></div>
                    <span className="color-name">Primary Blue</span>
                    <span className="color-hex">#3E80F5</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch uc-light-blue"></div>
                    <span className="color-name">Light Blue</span>
                    <span className="color-hex">#CEE1F2</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch uc-dark-gray"></div>
                    <span className="color-name">Dark Gray</span>
                    <span className="color-hex">#2D3E4E</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch uc-white"></div>
                    <span className="color-name">White</span>
                    <span className="color-hex">#FFFFFF</span>
                  </div>
                </div>
              </div>
            </div>

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
          </section>
        </FadeInSection>
      </main>
    </div>
  );
};

export default UniversityConnect; 