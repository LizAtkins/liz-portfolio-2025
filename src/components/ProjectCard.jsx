import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, quote, category, tags, link }) => {
  const isInternalLink = link && (link.startsWith('/') || link.startsWith('#'));
  
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      role="article"
      aria-labelledby={`project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {category === 'written' && quote ? (
        <div className="project-quote">
          <blockquote cite={link}>{quote}</blockquote>
        </div>
      ) : image ? (
        <div className="project-image">
          <img src={image} alt={`${title} project preview`} />
        </div>
      ) : null}
      <div className="project-content">
        {link && (
          isInternalLink ? (
            <Link 
              to={link} 
              className="project-title-link"
              aria-label={`View ${title} project`}
            >
              <h3 id={`project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
            </Link>
          ) : (
            <a 
              href={link} 
              className="project-title-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} project`}
            >
              <h3 id={`project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
            </a>
          )
        )}
        <p>{description}</p>
        <div className="project-tags" role="list" aria-label="Project technologies">
          {tags.map((tag, index) => (
            <span key={index} className="tag" role="listitem">{tag}</span>
          ))}
        </div>
        {link && (
          isInternalLink ? (
            <Link 
              to={link} 
              className="project-link"
              aria-label={`View ${title} project`}
            >
              View Project →
            </Link>
          ) : (
            <a 
              href={link} 
              className="project-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} project`}
            >
              View Project →
            </a>
          )
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 