import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
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
import EvChargingMap from './pages/EvChargingMap';
import NAWams from './pages/NAWams';
import AfosrPlatform from './pages/AfosrPlatform';
import EmailBlasts from './pages/EmailBlasts';
import Resume from './pages/Resume';
import './styles/_footer.scss';
import profilePhoto from './assets/img/profile.png';

// Introduction
const Introduction = () => (
  <section className="introduction" data-section="0">
    <div className="introduction-content">
      <h2>Hi, I'm Liz</h2>
      <p className="introduction-text">
        I build responsive web applications and interfaces with React, TypeScript, and modern tooling—focused on clean architecture, accessibility, and on-brand visual design. Here's a selection of my work in development and design.
      </p>
      <div className="scroll-indicator">
        <span>Scroll to view projects</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </div>
  </section>
);

// Project sections (no chapter framing)
const WebSection = () => (
  <section id="web" className="chapter" data-section="1">
    <div className="chapter-header">
      <h2>Web Development</h2>
      <p className="chapter-intro">Front-end and full-stack projects—responsive sites, component-based UIs, and clean code.</p>
    </div>
    <div className="project-grid">
      {projects.web.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

const VisualSection = () => (
  <section id="visual" className="chapter" data-section="2">
    <div className="chapter-header">
      <h2>Visual Design</h2>
      <p className="chapter-intro">Digital design, branding, and social content that connects with audiences.</p>
    </div>
    <div className="project-grid">
      {projects.visual.map((project, index) => (
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

// GitHub Pages 404 redirect handler
const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Handle GitHub Pages 404 redirect
    // The 404.html redirects to /?/path format, we need to convert it to proper routing
    if (location.search.includes('?/')) {
      const path = location.search
        .replace(/^\?\/?/, '')
        .replace(/~and~/g, '&')
        .split('&')[0];
      const newPath = path || '/';
      navigate(newPath, { replace: true });
    }
  }, [location.search, navigate]);

  return null;
};

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(`theme-${savedTheme}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            if (section != null) setActiveSection(parseInt(section, 10));
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px' }
    );

    document.querySelectorAll('.chapter, .introduction').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router basename="/liz-portfolio-2025">
      <RedirectHandler />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={
          <div className="app">
            <SparkleTrail />
            <header>
              <FadeInSection>
                <nav>
                  <ul>
                    <li><Link to="/" className={activeSection === 0 ? 'active' : ''}>Home</Link></li>
                    <li><a href="#web" className={activeSection === 1 ? 'active' : ''}>Web</a></li>
                    <li><a href="#visual" className={activeSection === 2 ? 'active' : ''}>Visual</a></li>
                    <li><Link to="/resume">Resume</Link></li>
                  </ul>
                </nav>
                <div className="header-content">
                  <h1>Liz Atkins</h1>
                  <img src={profilePhoto} alt="Liz Atkins" className="profile-avatar" />
                  <div className="title-container">
                    <p className="title">Web Development</p>
                    <p className="title">Visual Design</p>
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
                <WebSection />
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <VisualSection />
              </FadeInSection>
            </main>

            <Footer setIsContactFormOpen={setIsContactFormOpen} />
            <ContactForm 
              isOpen={isContactFormOpen} 
              onClose={() => setIsContactFormOpen(false)} 
            />
          </div>
        } />
        <Route path="/ev-charging-map" element={<EvChargingMap />} />
        <Route path="/na-wams" element={<NAWams />} />
        <Route path="/afosr-platform" element={<AfosrPlatform />} />
        <Route path="/university-connect" element={<UniversityConnect />} />
        <Route path="/social-media-campaign" element={<SocialMediaCampaign />} />
        <Route path="/email-blasts" element={<EmailBlasts />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
