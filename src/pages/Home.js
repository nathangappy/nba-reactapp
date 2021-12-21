// Import Components
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <div className='home'>
        <div className='home__hero'>
          <h1>Welcome to NBA React</h1>
        </div>
        <Link to='/standings'>
          <div className='home__tool'>League Standings</div>
        </Link>
        <Link to='/players'>
          <div className='home__tool'>Player Search</div>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
