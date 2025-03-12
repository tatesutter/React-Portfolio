import Project from '../components/project';
import '../styles/portfolio.css';
import trackerImage from '../assets/project-images/tracker.png';
import searchImage from '../assets/project-images/candidate search.png';

const projects = [
  {
    title: 'Employee Tracker',
    image: trackerImage,
    deployedLink: 'https://youtu.be/Ubl1IzC-32k',
    githubLink: 'https://github.com/tatesutter/Employee-Tracker',
  },
  {
    title: 'Candidate Search',
    image: searchImage,
    deployedLink: 'https://github.com/tatesutter/Candidate-Search',
    githubLink: 'https://github.com/tatesutter/Candidate-Search',
  },
  // Add more projects here
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>My Work</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
