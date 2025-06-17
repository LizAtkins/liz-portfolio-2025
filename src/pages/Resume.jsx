import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';
import ContactForm from '../components/ContactForm';

const Resume = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

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
              <li><Link to="/resume">Resume</Link></li>
            </ul>
          </nav>
        </FadeInSection>
      </header>

      <main>
        <FadeInSection>
          <section className="chapter">
            <div className="chapter-header">
              <span className="chapter-number">Professional Profile</span>
              <h2>Interactive Resume</h2>
              <p className="chapter-intro">
                A comprehensive overview of my professional journey, skills, and experience in web development and design.
              </p>
            </div>

            <section className="resume-content">
              <div className="resume-header">
                <h1>LIZ ATKINS</h1>
                <h2>Web Developer</h2>
                <div className="contact-info">
                  <p>Dayton, OH</p>
                  <div className="social-links">
                    <a href="https://linkedin.com/in/liz-atkins" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/LizAtkins" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                      <FaGithub />
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
              </div>

              <section className="resume-section">
                <h3>SUMMARY</h3>
                <p>
                  Front-end focused web developer skilled in writing custom HTML, CSS, and JavaScript to build
                  responsive and accessible websites. I've worked on <a href="https://github.com/LizAtkins/conference-landing-page" target="_blank" rel="noopener noreferrer">conference event websites</a>, <a href="https://github.com/LizAtkins/TarotCardProgram" target="_blank" rel="noopener noreferrer">back-end applications</a>,
                  and <a href="https://github.com/LizAtkins/css-glinda" target="_blank" rel="noopener noreferrer">CSS illustrations</a>, bringing both functionality and artistry to the web. Passionate about working on
                  projects that have a meaningful impact and improve the lives of others.
                </p>
              </section>

              <section className="resume-section">
                <h3>Work Experience</h3>
                <div className="experience-item">
                  <h4>Full Stack Developer</h4>
                  <p className="company">Seer Consulting LLC · Full-time</p>
                  <p className="date">Apr 2025 - May 2025</p>
                  <ul>
                    <li>Contributed to a scalable monorepo architecture, writing clean, maintainable TypeScript across both frontend and backend codebases, and collaborating with team members via Git version control and code reviews.</li>
                    <li>Developed a "My Resources" feature allowing users to update or delete content; implemented secure CRUD operations using Angular services and Prisma queries.</li>
                    <li>Built and implemented core UI components for the <a href="/liz-portfolio-2025/university-connect" target="_blank" rel="noopener noreferrer">University Connect platform</a>, creating a modern and intuitive user interface using Angular and Tailwind CSS.</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h4>Web Developer</h4>
                  <p className="company">ARCTOS Technology Solutions · Full-time</p>
                  <p className="date">Sep 2023 - Mar 2025</p>
                  <ul>
                    <li>
                      Developed responsive websites using HTML, Bootstrap 5 CSS, and JavaScript, improving user experience
                      through optimized layouts, interactive features, animations, and video integration, contributing to a 34%
                      increase in attendance at our largest client conference, <a href="https://www.dmcmeeting.com/" target="_blank" rel="noopener noreferrer">Defense Manufacturing Conference</a>, from 1,509 to 2,025 participants.
                    </li>
                    <li>
                      Enhanced email marketing efforts by incorporating modern, responsive HTML templates, leading to
                      visually appealing and mobile-friendly emails that ensured design consistency and improved campaign
                      engagement.
                    </li>
                    <li>
                      Spearheaded the creation and management of LinkedIn and Twitter accounts, establishing <a href="/liz-portfolio-2025/social-media-campaign" target="_blank" rel="noopener noreferrer">social media campaigns</a> from the ground up, and successfully implemented targeted ads, driving increased event attendance and engagement.
                    </li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h4>Web Intern</h4>
                  <p className="company">The Clarion, Sinclair Community College</p>
                  <p className="date">Feb 2023 - Aug 2023</p>
                  <ul>
                    <li>
                      Designed and maintained the <a href="https://sinclairclarion.com" target="_blank" rel="noopener noreferrer">school magazine's website</a>, adding new features while ensuring alignment
                      with the magazine's brand and style through collaboration with editorial and design teams.
                    </li>
                    <li>
                      Recognized by the advisor for going above and beyond the role, contributing to graphic design, <a href="https://www.sinclairclarion.com/home/technology/2023/05/20/should-college-students-use-chat-gpt/" target="_blank" rel="noopener noreferrer">writing articles</a>, editing content, and managing social media, demonstrating a strong commitment to team
                      success.
                    </li>
                    <li>
                      Monitored website performance and effectively diagnosed WordPress issues to optimize user experience.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="resume-section">
                <h3>EDUCATION</h3>
                <div className="education-item">
                  <h4>Associate of Computer Information Systems/Web Development</h4>
                  <p className="institution">Sinclair Community College</p>
                  <p className="date">2022 - 2024</p>
                </div>
                <div className="education-item">
                  <h4>Google UX Design Certificate</h4>
                  <p className="institution">Google / Coursera</p>
                  <p className="date">2025</p>
                </div>
                <div className="education-item">
                  <h4>CSS Accessibility Course</h4>
                  <p className="institution">Codecademy</p>
                  <p className="date">2025</p>
                </div>
              </section>

              <section className="resume-section">
                <h3>SKILLS</h3>
                <div className="skills-grid">
                  <span className="skill-tag">HTML</span>
                  <a href="https://github.com/LizAtkins/css-glinda" target="_blank" rel="noopener noreferrer" className="skill-tag">CSS</a>
                  <span className="skill-tag">Bootstrap</span>
                  <span className="skill-tag">Tailwind</span>
                  <span className="skill-tag">Responsive Design</span>
                  <span className="skill-tag">WordPress</span>
                  <span className="skill-tag">User Experience (UX)</span>
                  <span className="skill-tag">Visual Storytelling</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">SEO</span>
                  <span className="skill-tag">Web Content Writing</span>
                  <span className="skill-tag">Adobe Photoshop</span>
                  <span className="skill-tag">Adobe Illustrator</span>
                  <span className="skill-tag">Adobe Dreamweaver</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Canva</span>
                  <span className="skill-tag">Social Media Marketing</span>
                  <span className="skill-tag">Google Analytics</span>
                  <span className="skill-tag">Git/GitHub</span>
                  <span className="skill-tag">Visual Studio</span>
                  <span className="skill-tag">Microsoft Access</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </section>
            </section>
          </section>
        </FadeInSection>
      </main>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
};

export default Resume; 