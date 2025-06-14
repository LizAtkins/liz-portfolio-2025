import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';
import ThemeToggle from '../components/common/ThemeToggle';
import ucHomepage from '../assets/img/uc_homepage.jpeg';

const UniversityConnect = () => {
  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${savedTheme}`);
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

      <main className="chapters">
        <FadeInSection>
          <section className="chapter" id="university-connect">
            <div className="chapter-header">
              <span className="chapter-number">Web Development</span>
              <h2>University Connect Platform</h2>
            </div>

            <div className="platform-intro">
              <h3>About University Connect</h3>
              <p>
                University Connect is a <strong>comprehensive platform</strong> designed to streamline the connection between 
                universities and their stakeholders. The platform serves as a <strong>central hub</strong> for managing 
                university resources, communications, and services, making it easier for students, faculty, 
                and administrators to access the tools they need.
              </p>
            </div>

            <div className="platform-overview">
              <h3>Project Overview</h3>
              <p>
                As part of the development team, I led the <strong>UI enhancement</strong> and <strong>theme implementation</strong> for the 
                University Connect platform. My work focused on creating a cohesive and accessible user 
                interface that works seamlessly in both light and dark modes, while maintaining the 
                platform's professional identity through a carefully selected color palette.
              </p>
              <p>
                The redesign process involved implementing a <strong>modern, clean interface</strong> with improved 
                navigation and user experience. The color scheme was carefully chosen to reflect the 
                platform's academic nature while ensuring accessibility and visual appeal across all 
                themes.
              </p>
              <div className="tech-stack">
                <h4>Key Technologies</h4>
                <div className="tech-buttons">
                  <span className="tech-button">Angular</span>
                  <span className="tech-button">Tailwind CSS</span>
                  <span className="tech-button">TypeScript</span>
                  <span className="tech-button">Prisma</span>
                  <span className="tech-button">NX</span>
                  <span className="tech-button">APIs</span>
                  <span className="tech-button">Node.js</span>
                  <span className="tech-button">Git</span>
                </div>
              </div>
            </div>

            <div className="platform-content">
              <div className="platform-grid">
                <div className="platform-details">
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
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>

      <ThemeToggle />
    </div>
  );
};

export default UniversityConnect; 