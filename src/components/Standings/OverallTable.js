import React from 'react';
import Table from './Table';

const OverallTable = ({ standings }) => {
  return <>{standings.teams && <Table teams={standings.teams} title='NBA' />}</>;
};

export default OverallTable;
