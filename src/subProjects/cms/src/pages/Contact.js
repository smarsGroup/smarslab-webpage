import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Table from '../components/Stats/Table';

const data = [
  {
    key: '1',
    label: 'Great Plains Ranchers Managing for ',
    value: 'Paper',
    link: 'https://muse.jhu.edu/article/773467',
  },
  {
    key: '2',
    label: 'Identifying Stakeholder Groups in Natural',
    value: 'Paper',
    link: 'https://muse.jhu.edu/article/773467',
  },
];

const Contact = () => (
  <Main
    title="Publications"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/cms/contact">Publications</Link></h2>
        </div>
      </header>
      <Table data={data} />
    </article>
  </Main>
);

export default Contact;
