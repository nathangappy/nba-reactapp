import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetTeamDetails } from '../helpers/GetTeamDetails';
import Layout from '../components/Layout';
import Roster from '../components/TeamDetails/Roster';

const TeamDetails = () => {
  const [details, setDetails] = useState('');
  const { team } = useParams();

  // Load team details
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch details and set state
  const fetchData = async () => {
    const data = await GetTeamDetails(team);
    setDetails(data);
  };

  return (
    <Layout>
      <div className='teamdetails'>
        <Roster roster={details.roster} />
      </div>
    </Layout>
  );
};

export default TeamDetails;
