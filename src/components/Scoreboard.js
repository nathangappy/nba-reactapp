import { useEffect, useState } from 'react';
import { GetScoreboard } from '../helpers/GetScoreboard';

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

  console.log(scoreboard);

  return (
    <div className='scoreboard'>
      {scoreboard ? (
        <div className='scoreboard__list'>
          {scoreboard.map((game) => (
            <div key={game.gameId} className='scoreboard__item'>
              <div className='scoreboard__team'>
                <img src={`images/${game.vTeam.triCode}.png`} alt='Visitor Logo' />
                <p>{game.vTeam.triCode}</p>
                <span>
                  {game.vTeam.win} - {game.vTeam.loss}
                </span>
              </div>
              <div className='scoreboard__vs'>vs</div>
              <div className='scoreboard__team'>
                <img src={`images/${game.hTeam.triCode}.png`} alt='Home Logo' />
                <p>{game.hTeam.triCode}</p>
                <span>
                  {game.hTeam.win} - {game.hTeam.loss}
                </span>
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
