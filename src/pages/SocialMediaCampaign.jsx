import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';
import ThemeToggle from '../components/common/ThemeToggle';

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
          <section className="chapter" id="social-media">
            <div className="chapter-header">
              <span className="chapter-number">Social Media</span>
              <h2>IIOM Symposium Campaign</h2>
            </div>

            <div className="campaign-intro">
              <h3>About IIOM</h3>
              <p>
                The International Institute of Obsolescence Management (IIOM International) is a not-for-profit 
                organization that exists to advance the science and practice of Obsolescence Management. IIOM 
                serves professionals worldwide who work in the field of obsolescence management and wish to 
                further their knowledge and understanding of the discipline, as well as network with others 
                in the same field.
              </p>
              <p>
                IIOM is represented by companies and individuals from sectors including aerospace, defense, 
                railways, nuclear energy, oil and gas, automation, automotive, and industrial. Such companies 
                develop, produce, and maintain products and services with long life cycles.
              </p>
            </div>

            <div className="campaign-overview">
              <h3>Campaign Overview</h3>
              <p>
                As part of the Meetings Management team at Arctos, I managed the social media presence 
                for the IIOM Symposium, creating engaging content and maintaining consistent branding 
                across all platforms. Our social media strategy focused on establishing IIOM's 
                professional authority while making complex technical content accessible.
              </p>
              <p>
                The campaign's visual identity uses a professional blue color palette to convey trust and 
                expertise, while the accent yellow adds energy and draws attention to key information. 
                This color scheme reflects IIOM's position as a serious professional organization while 
                maintaining visual interest. The social media posts were designed to build credibility 
                through expert speakers, create urgency for sponsorships, and highlight the prestigious 
                venue, all while maintaining a consistent brand voice that speaks to both technical 
                professionals and industry leaders.
              </p>
            </div>

            <div className="campaign-content">
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

                <div className="linkedin-posts">
                  <SocialMediaPost 
                    title="Featured Speaker Announcement"
                    description="This post introduces a key speaker to build credibility and excitement for the event. By highlighting Mr. Watson's background with the Defense Logistics Agency, we establish the symposium's professional caliber and attract relevant industry professionals."
                    iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:share:7229507947813371905?collapsed=1"
                  />
                  <SocialMediaPost 
                    title="Sponsorship Opportunities"
                    description="A strategic post targeting potential sponsors and partners. The urgency in the message creates a call-to-action while emphasizing the value proposition of connecting with industry leaders and gaining brand visibility."
                    iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:share:7244048729521942530?collapsed=1"
                  />
                  <SocialMediaPost 
                    title="Colonial Williamsburg Venue"
                    description="This post serves a dual purpose: it highlights the unique venue to enhance the event's appeal while providing practical information about accommodations. The combination of historical context and modern amenities helps position the event as both prestigious and accessible."
                    iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7234920916256714752?collapsed=1"
                  />
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

export default SocialMediaCampaign; 