// Import Components
import Layout from '../components/Layout';
import Standings from '../components/Standings/Standings';

const StandingsPage = () => {
  return (
    <Layout>
      <div className='standingspage'>
        <Standings />
      </div>
    </Layout>
  );
};

export default StandingsPage;
