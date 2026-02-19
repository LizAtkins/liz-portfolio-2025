import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/common/FadeInSection';
import SparkleTrail from '../components/common/SparkleTrail';

const AfosrPlatform = () => {
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

      <main>
        <FadeInSection>
          <section className="chapter">
            <div className="chapter-header">
              <span className="chapter-number">Web Development</span>
              <h2>PI Portal</h2>
              <p className="chapter-intro">
                A PI Portal for research program management, built at Mile Two. I contributed as a Software Engineer Intern across front-end development, documentation, and accessibility—working in a compliance-driven environment with React, Go, and structured review cycles.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                Confidential contract work. The repository and application are not publicly available.
              </p>
            </div>

            <section className="platform-overview">
              <h3>Development — Pages & content</h3>
              <ul className="contribution-list">
                <li>Developed About page to provide platform context</li>
                <li>Built FAQ page to address common user questions</li>
                <li>Developed Legal page (user agreement, privacy policy, terms of use, agency disclosure)</li>
                <li>Created Help page to centralize guidance for users</li>
                <li>Updated header dropdown with icons for User Profile and Settings, and added Logout button</li>
                <li>Drafted Login Help PDF guide linked on the login page for users experiencing login issues</li>
                <li>Added global styling for dark mode theme elements</li>
              </ul>
            </section>

            <section className="platform-overview">
              <h3>Development — Components & features</h3>
              <ul className="contribution-list">
                <li>Created loading spinner and implemented it in external verification modal</li>
                <li>Built admin tables with tabs for report data and notifications log</li>
                <li>Built admin dashboard pie charts for report status and notification type (Chart.js)</li>
                <li>Restricted attachment uploads to images only and updated UI accordingly</li>
                <li>Marked fields as required across forms based on documentation; updated FAQ for new file type requirements</li>
                <li>Fixed validation errors on participant, partner, and product pages; fixed duplicate report submissions</li>
                <li>Updated report status column (green text for approved, adjusted link styles); simplified user feedback option values</li>
                <li>Integrated upload modal; updated file preview to include image thumbnails</li>
                <li>Adjusted page routing to block direct browser access to tab content</li>
                <li>Built research areas section: news dropdown in header, updated research content page, new research areas page with sidebar navigation and route updates</li>
                <li>Built events slideshow: integrated into Events page, event data fetching and grouping by year, year selection to filter events</li>
                <li>Migrated admin section to React: dashboard with tab navigation (awards, admins, systems), reports table, notifications table (read/unread, filtering, deletion), dashboard charts for metrics; updated backend routes to serve React app</li>
                <li>Implemented admin announcement banner with fetch/update endpoints</li>
                <li>Built user management with pagination and filtering; added paginated API endpoint</li>
                <li>Built announcement management: tabs in Admin for active/scheduled and archived announcements, create/edit/archive/delete, modal for creating and editing</li>
                <li>Updated award navigation (report status links to award details); added data refresh button to dashboard</li>
                <li>Created email notification modal and templates for multiple notification types</li>
                <li>Fixed date range display (timezone handling); added character limit to announcement modal</li>
              </ul>
            </section>

            <section className="platform-overview">
              <h3>Accessibility</h3>
              <ul className="contribution-list">
                <li>Fixed form field label associations for screen readers: associated labels with inputs, unique IDs for dynamic fields, and aria handling so screen readers announce labels correctly</li>
                <li>Fixed label text overlapping "Nothing to report" checkbox</li>
                <li>Styled report status links with color and underline for clarity and accessibility</li>
              </ul>
            </section>

            <section className="platform-overview">
              <h3>Documentation (user guide)</h3>
              <ul className="contribution-list">
                <li>Added detailed tooltip content as internal help desk reference</li>
                <li>Documented validation rules</li>
                <li>Documented external system integration modals in the guide</li>
                <li>Designed annotated screenshots for clarity</li>
                <li>Expanded coverage to include every page of the website</li>
                <li>Added section for OMB controls; documented patent/DOI modals</li>
                <li>Incorporated customer feedback and comments into the guide</li>
              </ul>
            </section>

            <section className="platform-overview">
              <h3>Team participation</h3>
              <p>
                Attended daily stand-ups and shared progress; participated in sprint review and planning; attended dev &amp; design collaboration meetings to align implementation with design and user needs.
              </p>
            </section>

            <section className="tech-stack" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <h3>Technologies used</h3>
              <div className="tech-buttons" style={{ marginTop: '1.5rem' }}>
                <span className="tech-button">React</span>
                <span className="tech-button">Go</span>
                <span className="tech-button">TypeScript</span>
                <span className="tech-button">Chart.js</span>
                <span className="tech-button">Accessibility (ARIA, screen readers)</span>
              </div>
            </section>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
};

export default AfosrPlatform;
