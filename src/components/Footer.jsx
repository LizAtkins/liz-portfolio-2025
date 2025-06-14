import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import FadeInSection from './common/FadeInSection';

const Footer = ({ setIsContactFormOpen }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FadeInSection>
      <footer className="story-footer">
        <div className="footer-content">
          <div className="footer-chapter">
            <h3>The Epilogue</h3>
            <p>
              Every story has an ending, but this one is just beginning. 
              Let's write the next chapter together.
            </p>
          </div>
          
          <div className="footer-connect">
            <h4>Connect with the Author</h4>
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
            <p className="footer-quote">"The best stories are the ones we create together."</p>
          </div>
        </div>
      </footer>
    </FadeInSection>
  );
};

export default Footer; 