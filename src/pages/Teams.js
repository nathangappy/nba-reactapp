import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetAllTeams } from '../helpers/GetAllTeams';
import Layout from '../components/Layout';

const Teams = () => {
  const [teams, setTeams] = useState('');

  // Load teams
  useEffect(() => {
    fetchTeams();
  }, []);

  // Function to set state after fetching teams
  const fetchTeams = async () => {
    const data = await GetAllTeams();
    setTeams(data);
  };

  return (
    <Layout>
      <div className='teams'>
        {teams &&
          teams.map((team) => (
            <Link to={`/teams/${team.nickname}`.toLowerCase()} key={team.teamId}>
              <div className='teams__team'>
                <img src={`images/${team.tricode}.png`} alt='' />
                <p>{team.fullName}</p>
              </div>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default Teams;
