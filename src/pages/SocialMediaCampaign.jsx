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
              <li><Link to="/#web">Web</Link></li>
              <li><Link to="/#visual">Visual</Link></li>
              <li><Link to="/#written">Written</Link></li>
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

            <div className="linkedin-posts">
              <div className="linkedin-posts-row">
                <SocialMediaPost
                  title="IIOM Symposium Announcement"
                  description="Announcing the upcoming IIOM Symposium with key details about the event."
                  iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890"
                />
                <SocialMediaPost
                  title="Speaker Spotlight"
                  description="Highlighting our keynote speakers and their contributions to materials science."
                  iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:share:1234567891"
                />
              </div>
              <div className="linkedin-posts-row">
                <SocialMediaPost
                  title="Registration Open"
                  description="Early bird registration is now open for the IIOM Symposium."
                  iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:share:1234567892"
                />
                <SocialMediaPost
                  title="Call for Papers"
                  description="Submit your research papers for the IIOM Symposium."
                  iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:share:1234567893"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </main>
    </div>
  );
};

export default SocialMediaCampaign; 