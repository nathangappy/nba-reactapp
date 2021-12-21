import React from 'react';
import Table from './Table';

const ConferenceTable = ({ standings }) => {
  return (
    <>
      {/* Conditionally render both conferences */}
      {standings.conference &&
        !standings.conference.east.atlantic &&
        Object.keys(standings.conference).map((item) => (
          <Table
            teams={standings.conference[item]}
            title={`${item.toUpperCase()} Conference`}
            key={item}
          />
        ))}
    </>
  );
};

export default ConferenceTable;
