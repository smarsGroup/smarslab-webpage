import React, { useState } from 'react';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data] = useState(initialData);
  // TODO think about persisting this somewhere
  return (
    <div>
      <h3>Some stats about this site</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
