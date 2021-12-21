import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { GetAllPlayers } from '../helpers/GetAllPlayers';

// All players
let initial_playerlist;

const PlayerSearchPage = () => {
  // State for player to be searched for
  const [search, setSearch] = useState('');
  const [players, setPlayers] = useState('');

  // Fetch all players on load
  useEffect(() => {
    fetchPlayers();
  }, []);

  // Function to fetch players
  const fetchPlayers = async () => {
    const players = await GetAllPlayers();
    initial_playerlist = players;
    setPlayers(players);
  };

  // Handle player search on form submit
  const handlePlayerSearch = (e) => {
    e.preventDefault();
  };

  // Handle player search on input change
  const handleSearchChange = (e) => {
    let filteredPlayers = initial_playerlist.filter((player) =>
      (player.firstName + ' ' + player.lastName)
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setSearch(e.target.value);
    setPlayers(filteredPlayers);
    if (e.target.value.length === 0) {
      setPlayers(initial_playerlist);
    }
    console.log(players);
  };

  return (
    <Layout>
      <div className='player'>
        <div className='player__search'>
          <h2>NBA Player Search</h2>
          <form onSubmit={handlePlayerSearch}>
            <input
              type='text'
              name='search'
              id='search'
              value={search}
              onChange={handleSearchChange}
              placeholder='Search Player Names'
            />
            {/* <button>Search</button> */}
          </form>
        </div>
        <div className='results'>
          {players && (
            <table className='results__table'>
              <tbody>
                <tr className='results__headers'>
                  <th>Player</th>
                  <th>Position</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Draft Year</th>
                  <th>College</th>
                  <th>Country</th>
                </tr>
                {players.map((player) => (
                  <tr key={player.personId}>
                    <th>
                      <Link to={`/player/${player.personId}`}>
                        {player.firstName} {player.lastName}
                      </Link>
                    </th>
                    <th>{player.pos}</th>
                    <th>
                      {player.heightFeet}-{player.heightInches}
                    </th>
                    <th>{player.weightPounds} lbs</th>
                    <th>{player.draft.seasonYear}</th>
                    <th>{player.collegeName}</th>
                    <th>{player.country}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PlayerSearchPage;
