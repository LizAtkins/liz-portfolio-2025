import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';
import evChargingMapImg from '../assets/img/ev_charging_map.png';

const EvChargingMap = () => {
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
              <h2>EV Charging Station Map</h2>
              <p className="chapter-intro">
                An interactive map showing electric vehicle charging stations in Dayton, Ohio and surrounding cities. Features real-time data from OpenChargeMap API with filters, detailed station information, and nearby amenities.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                <a
                  href="https://lizatkins.github.io/ev-charging-map/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View live app →
                </a>
                <a
                  href="https://github.com/lizAtkins/ev-charging-map"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            <section className="platform-overview">
              <h3>Project Overview</h3>
              <p>
                This application helps users find electric vehicle charging stations in the Dayton area and surrounding cities within a 50km radius. It fetches real data from the OpenChargeMap API, displays stations with color-coded markers (red for DC Fast Charge, blue for Level 2), and lets users filter by charging level and free vs. paid stations. Clicking a marker shows detailed station info—name, address, connector types, operator, phone, hours, access type—and nearby amenities (restaurants, cafes, restrooms, parking) via the Overpass API.
              </p>
            </section>

  

            <section className="tech-stack" style={{ marginBottom: '2rem' }}>
              <h3>Technologies Used</h3>
              <div className="tech-buttons" style={{ marginTop: '1.5rem' }}>
                <span className="tech-button">Leaflet.js</span>
                <span className="tech-button">OpenStreetMap</span>
                <span className="tech-button">OpenChargeMap API</span>
                <span className="tech-button">Overpass API</span>
                <span className="tech-button">HTML5</span>
                <span className="tech-button">CSS3</span>
                <span className="tech-button">Vanilla JavaScript</span>
              </div>
            </section>

            <div className="platform-details" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              <div className="color-palette">
                <h3>Color Palette</h3>
                <div className="color-swatches">
                  <div className="color-swatch">
                    <div className="swatch" style={{ backgroundColor: '#2E7D32' }} />
                    <span className="color-name">Banner Green</span>
                    <span className="color-hex">#2E7D32</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }} />
                    <span className="color-name">White</span>
                    <span className="color-hex">#FFFFFF</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch" style={{ backgroundColor: '#D32F2F' }} />
                    <span className="color-name">DC Fast (Red)</span>
                    <span className="color-hex">#D32F2F</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch" style={{ backgroundColor: '#1976D2' }} />
                    <span className="color-name">Level 2 (Blue)</span>
                    <span className="color-hex">#1976D2</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch" style={{ backgroundColor: '#37474F' }} />
                    <span className="color-name">Footer Gray</span>
                    <span className="color-hex">#37474F</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="platform-showcase">
              <div className="platform-image">
                <img
                  src={evChargingMapImg}
                  alt="EV Charging Stations map for Dayton area with filters and markers"
                  className="rounded-image"
                />
                <div className="image-caption">
                  <p>Interactive map with DC Fast and Level 2 filters, color-coded markers, and station count</p>
                </div>
              </div>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2rem' }}>
              Data from OpenChargeMap (free API key required). Built with Leaflet.js and OpenStreetMap.
            </p>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
};

export default EvChargingMap;
