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
          <section className="chapter">
            <div className="chapter-header">
              <span className="chapter-number">Visual Design</span>
              <h2>Social Media Campaign</h2>
              <p className="chapter-intro">
                A comprehensive social media campaign for the International Institute of Materials (IIOM), 
                focusing on increasing engagement and awareness across multiple platforms.
              </p>
            </div>

            <div className="campaign-overview">
              <h3>Campaign Overview</h3>
              <p>Led the social media campaign for the IIOM Symposium, creating engaging content across multiple platforms to increase awareness and drive registrations. Developed a cohesive visual identity and messaging strategy that resonated with the materials science community.</p>
            </div>

            <div className="tech-stack" style={{ marginBottom: '3rem' }}>
              <h3>Skills Used</h3>
              <div className="tech-buttons" style={{ marginTop: '1.5rem' }}>
                <span className="tech-button">Social Media</span>
                <span className="tech-button">Graphic Design</span>
                <span className="tech-button">Content Strategy</span>
                <span className="tech-button">Conference Marketing</span>
              </div>
            </div>

            <div className="platform-details" style={{ maxWidth: '800px', margin: '0 auto' }}>
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

            <div className="linkedin-posts" style={{ 
              marginTop: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem'
            }}>
              <div className="linkedin-posts-row" style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center'
              }}>
                <SocialMediaPost
                  title="Speaker Spotlight"
                  description="Created a speaker announcement post featuring Mr. Kenneth Watson, incorporating key facts about his background and expertise to generate interest."
                  iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:share:7229507947813371905?collapsed=1"
                />
                <SocialMediaPost
                  title="Sponsorship Opportunity"
                  description="Designed a graphic-based post to promote remaining sponsorship opportunities, using visual elements to highlight the benefits of participation."
                  iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:share:7244048729521942530?collapsed=1"
                />
              </div>
              <div className="linkedin-posts-row" style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <SocialMediaPost
                  title="Hotel Accommodations"
                  description="Produced a video graphic showcasing the hotel amenities, combining visual elements to highlight the accommodation features for attendees."
                  iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7234920916256714752?collapsed=1"
                />
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
};

export default SocialMediaCampaign; 