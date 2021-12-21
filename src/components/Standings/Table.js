import React from 'react';

const Table = ({ teams, title }) => {
  return (
    <div>
      <table className='standings__table'>
        <tbody>
          <tr className='standings__headers'>
            <th>{title}</th>
            <th>W</th>
            <th>L</th>
            <th>PCT</th>
            <th>GB</th>
            <th>Home</th>
            <th>Away</th>
            <th>Div</th>
            <th>Conf</th>
            <th>Strk</th>
            <th>L10</th>
          </tr>
          {teams.map((team) => (
            <tr key={team.teamId}>
              <th>
                <div className='standings__identity'>
                  <img
                    src={`images/${team.teamSitesOnly.teamTricode}.png`}
                    alt=''
                    className='standings__logo'
                  />
                  {team.teamSitesOnly.teamName} {team.teamSitesOnly.teamTricode}
                </div>
              </th>
              <th>{team.win}</th>
              <th>{team.loss}</th>
              <th>{team.winPct}</th>
              <th>{team.gamesBehind}</th>
              <th>
                {team.homeWin}-{team.homeLoss}
              </th>
              <th>
                {team.awayWin}-{team.awayLoss}
              </th>
              <th>
                {team.divWin}-{team.divLoss}
              </th>
              <th>
                {team.confWin}-{team.confLoss}
              </th>
              <th>
                {team.isWinStreak ? 'W' : 'L'}
                {team.streak}
              </th>
              <th>
                {team.lastTenWin}-{team.lastTenLoss}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
