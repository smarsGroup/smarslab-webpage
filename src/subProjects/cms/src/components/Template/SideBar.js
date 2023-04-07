import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/cms/about" className="logo">
        <img src={'/images/cms.jpg'} alt="" />
      </Link>
      <header>
        <h3>Carbon Monitoring System</h3>
      </header>
    </section>

    <section className="blurb">
      <h2>Funding</h2>
      <p>This work is supported by the Agriculture and Food Research Initiative
        (AFRI) Water for Agriculture grant no. 2017-68007-26584/project
        accession no. 1013079 from the USDA National Institute of Food and Agriculture.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/cms/resume" className="button">Learn More</Link> : <Link to="/cms/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; UMD &apos;Geography Department <Link to="/">https://geog.umd.edu/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
