import React from 'react';
import Table from './Table';

const DivisionTable = ({ standings }) => {
  // Combine all divisions into one object
  let all_divisions = {};
  if (standings.conference && standings.conference.east.atlantic) {
    all_divisions = Object.assign(standings.conference.east, standings.conference.west);
  }

  return (
    <>
      {/* Condtionally render all divisions */}
      {all_divisions &&
        Object.keys(all_divisions).map((division) => (
          <Table
            teams={all_divisions[division]}
            title={`${division.toUpperCase()}`}
            key={division}
          />
        ))}
    </>
  );
};

export default DivisionTable;
