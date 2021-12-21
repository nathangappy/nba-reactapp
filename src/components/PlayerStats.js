import React from 'react';

const PlayerStats = ({ profile }) => {
  let stats;
  if (profile) {
    stats = profile.league.standard.stats.regularSeason.season;
  }
  return (
    <div className='playerstats'>
      {stats && (
        <>
          <h1>Career Averages</h1>
          <table className='playerstats__table'>
            <tbody>
              <tr className='playerstats__headers'>
                <th>Year</th>
                <th>GP</th>
                <th>GS</th>
                <th>Min</th>
                <th>Pts</th>
                <th>Reb</th>
                <th>Ast</th>
                <th>Blk</th>
                <th>Stl</th>
                <th>To</th>
                <th>FG%</th>
                <th>3P%</th>
                <th>FT%</th>
              </tr>
              {stats.map((stat) => (
                <tr key={stat.seasonYear}>
                  <th>{stat.seasonYear}</th>
                  <th>{stat.total.gamesPlayed}</th>
                  <th>{stat.total.gamesStarted}</th>
                  <th>{stat.total.mpg}</th>
                  <th>{stat.total.ppg}</th>
                  <th>{stat.total.rpg}</th>
                  <th>{stat.total.apg}</th>
                  <th>{stat.total.bpg}</th>
                  <th>{stat.total.spg}</th>
                  <th>{stat.total.topg}</th>
                  <th>{stat.total.fgp}</th>
                  <th>{stat.total.tpp}</th>
                  <th>{stat.total.ftp}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default PlayerStats;
