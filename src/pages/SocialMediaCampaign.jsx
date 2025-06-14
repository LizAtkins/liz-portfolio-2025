import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';

const SocialMediaPost = ({ title, description, iframeSrc }) => (
  <div className="social-media-post">
    <div className="post-header">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <iframe 
      src={iframeSrc}
      height="671" 
      width="504" 
      frameBorder="0" 
      allowFullScreen 
      title={title}
    />
  </div>
);

const SocialMediaCampaign = () => {
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
          <section className="campaign-intro">
            <h3>Social Media Campaign</h3>
            <p>
              A comprehensive social media campaign for the International Institute of Materials (IIOM), 
              focusing on increasing engagement and awareness across multiple platforms.
            </p>
          </section>

          <section className="campaign-overview">
            <h3>Campaign Overview</h3>
            <p>
              The campaign utilized a carefully crafted color palette and consistent visual language 
              to create a cohesive brand presence across all social media platforms.
            </p>
          </section>

          <div className="campaign-grid">
            <div className="campaign-details">
              <div className="color-palette">
                <h3>Color Palette</h3>
                <div className="color-swatches">
                  <div className="color-swatch">
                    <div className="swatch iiom-light-blue"></div>
                    <span className="color-name">Light Blue</span>
                    <span className="color-hex">#86BCE2</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch iiom-dark-blue"></div>
                    <span className="color-name">Dark Blue</span>
                    <span className="color-hex">#01427A</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch iiom-medium-blue"></div>
                    <span className="color-name">Medium Blue</span>
                    <span className="color-hex">#235F9A</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch iiom-yellow"></div>
                    <span className="color-name">Accent Yellow</span>
                    <span className="color-hex">#F6D038</span>
                  </div>
                  <div className="color-swatch">
                    <div className="swatch iiom-white"></div>
                    <span className="color-name">White</span>
                    <span className="color-hex">#FFFFFF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </main>
    </div>
  );
};

export default SocialMediaCampaign; 