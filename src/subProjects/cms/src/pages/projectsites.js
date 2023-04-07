import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Experience from '../components/Resume/Experience';

import positions from '../data/resume/positions';

// const sections = [
//   'Central Platte, Nebraska',
//   'Mifflin County, Pennsylvania',
//   'North Platte, Nebraska',
//   'Potter-Tioga Project Updates',
//   'Valley Verde, Arizona',
// ];

const Projectsites = () => (
  <Main
    title="Project Sites"
    description="Project Sites for Carbon Monitoring System"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/cms/resume">Project Sites</Link></h2>
          {/* <div className="link-container"> */}
          {/*  {sections.map((sec) => ( */}
          {/*    <h6 key={sec}> */}
          {/*      <a href={`#${sec.toLowerCase()}`}>{sec}</a> */}
          {/*    </h6>))} */}
          {/* </div> */}

        </div>
      </header>
      <Experience data={positions} />

    </article>
  </Main>
);

export default Projectsites;
