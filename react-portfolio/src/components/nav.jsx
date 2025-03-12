import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>About Me</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {/* <li><NavLink to="/resume">Resume</NavLink></li> */}
      </ul>
    </nav>
  );
}
