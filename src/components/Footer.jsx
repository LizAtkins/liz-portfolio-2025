import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import FadeInSection from './common/FadeInSection';

const Footer = ({ setIsContactFormOpen }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FadeInSection>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-cta">
            <h3>Let's work together</h3>
            <p>
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>

          <div className="footer-connect">
            <h4>Connect</h4>
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

          <div className="footer-copyright">
            <p>© {currentYear} Liz Atkins. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </FadeInSection>
  );
};

export default Footer; 