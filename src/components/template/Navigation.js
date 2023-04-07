import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <div id="fixed-title">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <span>
        <em>Spatial Modeling and Remote Sensing Lab </em>
      </span>
    </div>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path} style={{cursor: 'pointer'}}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
