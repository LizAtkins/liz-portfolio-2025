import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, quote, category, tags, link }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {category === 'written' ? (
        <div className="project-quote">
          <blockquote>{quote}</blockquote>
        </div>
      ) : (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        {link && (
          <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 