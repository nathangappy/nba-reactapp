import { useEffect, useState } from 'react';
import { GetScoreboard } from '../helpers/GetScoreboard';
import { FormatQuarter } from '../helpers/FormatQuarter';

const Scoreboard = () => {
  const [scoreboard, setScoreboard] = useState('');

  // Initial one time render functions to run
  useEffect(() => {
    fetchScoreboard();
  }, []);

  // Async function to get and set scoreboard state
  const fetchScoreboard = async () => {
    const scoreboard_data = await GetScoreboard();
    setScoreboard(scoreboard_data.games);
  };

  return (
    <div className='scoreboard'>
      {scoreboard ? (
        <div className='scoreboard__list'>
          {scoreboard.map((game) => (
            <div key={game.gameId} className='scoreboard__item'>
              {/* Visitor Team */}
              <div className='scoreboard__team'>
                <img src={`images/${game.vTeam.triCode}.png`} alt='Visitor Logo' />
                <p>{game.vTeam.triCode}</p>
                {game.isGameActivated || game.endTimeUTC ? (
                  <span>{game.vTeam.score}</span>
                ) : (
                  <span>
                    {game.vTeam.win} - {game.vTeam.loss}
                  </span>
                )}
              </div>
              <div className='scoreboard__vs'>vs</div>
              {/* Home Team */}
              <div className='scoreboard__team'>
                <img src={`images/${game.hTeam.triCode}.png`} alt='Home Logo' />
                <p>{game.hTeam.triCode}</p>
                {game.isGameActivated || game.endTimeUTC ? (
                  <span>{game.hTeam.score}</span>
                ) : (
                  <span>
                    {game.hTeam.win} - {game.hTeam.loss}
                  </span>
                )}
              </div>
              {/* Game Time */}
              <div className='scoreboard__time'>
                {game.isGameActivated ? (
                  <p className='scoreboard__timer'>{`${game.clock} - ${FormatQuarter(
                    game.period.current
                  )} Quarter`}</p>
                ) : game.endTimeUTC ? (
                  <p className='scoreboard__completed'>Final</p>
                ) : (
                  game.startTimeEastern
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='scoreboard__none'>No NBA Games Today</div>
      )}
    </div>
  );
};

export default Scoreboard;
