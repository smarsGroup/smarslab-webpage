import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Carbon Monitoring Website, UMD Geo Department, '
    + 'ABC, and .'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/cms/about">About</Link></h2>
        </div>
      </header>
      <p> The Water for Agriculture project brings together social and biophysical researchers and
        practitioners to work with communities in Nebraska, Pennsylvania, and Arizona to address the
        water and agriculture issues that matter most to them through effective stakeholder
        engagement.The project is currently developing five study locations in three states.
        In each site, we seek to build local capacity, provide technical and coordination assistance
        and resources, and provide the biophysical information data necessary to meet study site
        priorities and develop their own strategies to address their long-term agriculture
        and water-related needs.  For more information on each state and site see.
      </p>
      <p> Source available <a href="https://google.com">here</a>.</p>
    </article>
  </Main>
);

export default Index;
