import React from 'react';
import { Link } from 'react-router-dom';

const Roster = ({ roster }) => {
  return (
    <div className='roster'>
      <h1>Current Roster</h1>
      <div className='roster__list'>
        {roster &&
          roster.map((player) => (
            <Link to={`/player/${player.bio.personId}`} key={player.bio.personId}>
              <div className='roster__player'>
                <img
                  src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.bio.personId}.png`}
                  alt=''
                  className='roster__headshot'
                />
                <div className='roster__info'>
                  <p>
                    {player.bio.firstName} {player.bio.lastName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Roster;
