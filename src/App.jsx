import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from './components/ProjectCard';
import FadeInSection from './components/common/FadeInSection';
import SparkleTrail from './components/common/SparkleTrail';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { projects } from './data/projects';
import SocialMediaCampaign from './pages/SocialMediaCampaign';
import UniversityConnect from './pages/UniversityConnect';
import Resume from './pages/Resume';
import './styles/_footer.scss';
import profileAvatar from './assets/img/profile-avatar.png';

// Introduction Component
const Introduction = () => (
  <section className="introduction">
    <div className="introduction-content">
      <h2>Welcome to My Story</h2>
      <p className="introduction-text">
        Every project tells a story. From web development to visual design, 
        each piece of work represents a unique chapter in my journey of creating 
        meaningful digital experiences. Scroll through these chapters to explore 
        how I bring ideas to life through code, design, and compelling writing.
      </p>
      <div className="scroll-indicator">
        <span>Scroll to begin the journey</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </div>
  </section>
);

// Chapter Components
const WebChapter = () => (
  <section 
    id="web"
    className="chapter"
    data-chapter="1"
  >
    <div className="chapter-header">
      <span className="chapter-number">Chapter 1</span>
      <h2>The Web Chapter</h2>
      <p className="chapter-intro">Where structure meets story—this is where ideas become interactive. Each project here represents a unique digital journey, crafted with purpose and precision.</p>
    </div>
    <div className="project-grid">
      {projects.web.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

const VisualChapter = () => (
  <section 
    id="visual"
    className="chapter"
    data-chapter="2"
  >
    <div className="chapter-header">
      <span className="chapter-number">Chapter 2</span>
      <h2>The Visual Chapter</h2>
      <p className="chapter-intro">Designs that speak before a single word is read. Here, we explore the power of visual storytelling through carefully crafted designs that capture attention and convey meaning.</p>
    </div>
    <div className="project-grid">
      {projects.visual.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

const InboxChapter = () => (
  <section 
    id="inbox"
    className="chapter"
    data-chapter="3"
  >
    <div className="chapter-header">
      <span className="chapter-number">Chapter 3</span>
      <h2>The Inbox Chapter</h2>
      <p className="chapter-intro">Email campaigns that actually get read—and clicked. Discover how strategic communication can transform the inbox into a powerful engagement tool.</p>
    </div>
    <div className="project-grid">
      {projects.inbox.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

const WrittenChapter = () => (
  <section 
    id="written"
    className="chapter"
    data-chapter="3"
  >
    <div className="chapter-header">
      <span className="chapter-number">Chapter 3</span>
      <h2>The Written Chapter</h2>
      <p className="chapter-intro">Clear, concise, or creative—these words do the heavy lifting. Explore how strategic writing can shape narratives and drive engagement across platforms.</p>
    </div>
    <div className="project-grid">
      {projects.written.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

// Scroll handler component
const ScrollToSection = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

function App() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(`theme-${savedTheme}`);

    // Intersection Observer for chapter tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chapter = entry.target.getAttribute('data-chapter');
            setActiveChapter(parseInt(chapter));
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-10% 0px'
      }
    );

    document.querySelectorAll('.chapter, .introduction').forEach((section) => {
      observer.observe(section);
    });

    // Add passive scroll event listener
    window.addEventListener('scroll', () => {}, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={
          <div className="app">
            <SparkleTrail />
            <header>
              <FadeInSection>
                <nav>
                  <div className="chapter-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${(activeChapter / 3) * 100}%` }}
                      />
                    </div>
                  </div>
                  <ul>
                    <li><Link to="/" className={activeChapter === 0 ? 'active' : ''}>Home</Link></li>
                    <li><a href="#web" className={activeChapter === 1 ? 'active' : ''}>Web</a></li>
                    <li><a href="#visual" className={activeChapter === 2 ? 'active' : ''}>Visual</a></li>
                    <li><a href="#written" className={activeChapter === 3 ? 'active' : ''}>Written</a></li>
                    <li><Link to="/resume">Resume</Link></li>
                  </ul>
                </nav>
                <div className="header-content">
                  <h1>Liz Atkins</h1>
                  <img src={profileAvatar} alt="Liz Atkins Profile Avatar" className="profile-avatar" />
                  <div className="title-container">
                    <p className="title">Web Development</p>
                    <p className="title">Visual Design</p>
                    <p className="title">Writing & Content Strategy</p>
                  </div>
                  <div className="social-links">
                    <a href="https://github.com/lizatkins" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                      <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/liz-atkins" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <FaLinkedin />
                    </a>
                    <button 
                      onClick={() => setIsContactFormOpen(true)} 
                      className="social-link-button"
                      aria-label="Contact Me"
                    >
                      <FaEnvelope />
                    </button>
                  </div>
                </div>
              </FadeInSection>
            </header>

            <main className="chapters">
              <FadeInSection>
                <Introduction />
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <WebChapter />
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <VisualChapter />
              </FadeInSection>
              <FadeInSection delay={0.4}>
                <WrittenChapter />
              </FadeInSection>
            </main>

            <Footer setIsContactFormOpen={setIsContactFormOpen} />
            <ContactForm 
              isOpen={isContactFormOpen} 
              onClose={() => setIsContactFormOpen(false)} 
            />
          </div>
        } />
        <Route path="/university-connect" element={<UniversityConnect />} />
        <Route path="/social-media-campaign" element={<SocialMediaCampaign />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
