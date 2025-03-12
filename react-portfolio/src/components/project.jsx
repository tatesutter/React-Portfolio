import PropTypes from 'prop-types';
import '../styles/portfolio.css';

export default function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Live</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};
