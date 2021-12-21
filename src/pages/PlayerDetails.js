import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetPlayerProfile } from '../helpers/GetPlayerProfile';
import Layout from '../components/Layout';
import PlayerBio from '../components/PlayerBio';
import PlayerStats from '../components/PlayerStats';

const PlayerDetails = () => {
  const [profile, setProfile] = useState('');
  let { personId } = useParams();

  useEffect(() => {
    fetchPlayerProfile();
  }, []);

  const fetchPlayerProfile = async () => {
    const playerProfile = await GetPlayerProfile(personId);
    setProfile(playerProfile);
  };

  return (
    <Layout>
      <div className='playerdetails'>
        <PlayerBio profile={profile} personId={personId} />
        <PlayerStats profile={profile} />
      </div>
    </Layout>
  );
};

export default PlayerDetails;
