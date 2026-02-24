import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';
import emailScrs from '../assets/img/email_scrs_2024.png';
import emailAsip from '../assets/img/email_asip_2024.png';
import emailAas from '../assets/img/email_aas_2025.png';
import emailNawams from '../assets/img/email_nawams_25.png';

const campaigns = [
  { title: 'NAWAMS 25 — North American WAMS', blasts: [{ src: emailNawams, caption: 'Knoxville, TN · July 14–16, 2025' }] },
  { title: 'SCRS 2024 — Supply Chain Risks & Solutions Conference', blasts: [{ src: emailScrs, caption: 'Call for Papers' }] },
  { title: 'ASIP Conference — Aircraft Structural Integrity Program', blasts: [{ src: emailAsip, caption: 'Austin, TX · Dec 2–5, 2024' }] },
  { title: 'AA&S 2025 — Aircraft Airworthiness and Sustainment Conference', blasts: [{ src: emailAas, caption: 'Dayton, OH · May 12–15, 2025' }] },
];

const EmailBlasts = () => {
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

      <main className="chapters">
        <section className="chapter">
            <div className="chapter-header">
              <span className="chapter-number">Visual Design</span>
              <h2>Email Marketing</h2>
              <p className="chapter-intro">
                HTML email campaigns for event marketing. I coded responsive email templates and designed the graphics for conferences and events—keeping layouts mobile-friendly and on-brand.
              </p>
            </div>

            <section className="platform-overview">
              <h3>Overview</h3>
              <p>
                I created HTML email campaigns for events and conferences, writing the HTML/CSS for responsive, client-compatible emails and designing the visuals (headers, graphics, CTAs). Emails were built to render consistently across clients and devices while matching each event’s branding.
              </p>
            </section>

            <section className="tech-stack" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <h3>Skills & tools</h3>
              <div className="tech-buttons" style={{ marginTop: '1.5rem' }}>
                <span className="tech-button">HTML Email</span>
                <span className="tech-button">Responsive Email CSS</span>
                <span className="tech-button">Graphic Design</span>
                <span className="tech-button">Email Marketing</span>
                <span className="tech-button">Conference / Event Marketing</span>
              </div>
            </section>

            {campaigns.length > 0 && (
              <div className="email-blasts-showcase">
                {campaigns.map((campaign, i) => (
                  <FadeInSection key={i} delay={i * 0.1}>
                    <section className="email-blast-campaign">
                      <h3>{campaign.title}</h3>
                      <div className="email-blasts-grid">
                        {campaign.blasts.map((blast, j) => (
                          <figure key={j} className="email-blast-item">
                            <a href={blast.src} target="_blank" rel="noopener noreferrer" className="email-blast-link" aria-label={`Open ${campaign.title} email in new tab`}>
                              <div className="email-blast-image-wrap">
                                <img src={blast.src} alt={blast.caption || `${campaign.title} email`} />
                              </div>
                            </a>
                            {blast.caption && <figcaption>{blast.caption}</figcaption>}
                          </figure>
                        ))}
                      </div>
                    </section>
                  </FadeInSection>
                ))}
              </div>
            )}
          </section>
      </main>
    </div>
  );
};

export default EmailBlasts;
