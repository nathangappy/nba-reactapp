import { useEffect, useState } from 'react';
import { GetStandings } from '../../helpers/GetStandings';
import OverallTable from './OverallTable';
import ConferenceTable from './ConferenceTable';
import DivisionTable from './DivisionTable';

const Standings = () => {
  const [standings, setStandings] = useState('');
  const [standings_type, setStandingsType] = useState('Overall');

  useEffect(() => {
    // Function to get and set standings state
    const fetchStandings = async () => {
      const standings = await GetStandings(standings_type);
      setStandings(standings);
    };

    fetchStandings();
  }, [standings_type]);

  return (
    <div className='standings'>
      <h1 className='standings__title'>NBA {standings_type} Standings</h1>
      <div className='standings__selector'>
        <button
          onClick={(e) => setStandingsType(e.target.value)}
          value='Overall'
          className={`standings__button standings__button--${
            standings_type === 'Overall' ? 'active' : ''
          }`}
        >
          Overall
        </button>
        <button
          onClick={(e) => setStandingsType(e.target.value)}
          value='Conference'
          className={`standings__button standings__button--${
            standings_type === 'Conference' ? 'active' : ''
          }`}
        >
          Conference
        </button>
        <button
          onClick={(e) => setStandingsType(e.target.value)}
          value='Division'
          className={`standings__button standings__button--${
            standings_type === 'Division' ? 'active' : ''
          }`}
        >
          Division
        </button>
      </div>
      <div className='standings__container'>
        {standings_type === 'Overall' && <OverallTable standings={standings} />}
        {standings_type === 'Conference' && <ConferenceTable standings={standings} />}
        {standings_type === 'Division' && <DivisionTable standings={standings} />}
      </div>
    </div>
  );
};

export default Standings;
