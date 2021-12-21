import { Routes, Route } from 'react-router-dom';
import { GetAllPlayers } from './helpers/GetAllPlayers';
import { GetScoreboard } from './helpers/GetScoreboard';

// Fixed Components
import Navigation from './components/Navigation';
import Scoreboard from './components/Scoreboard';

// Pages
import HomePage from './pages/Home';
import StandingsPage from './pages/Standings';

// Import Sass Files
import './scss/main.scss';

function App() {
  // Load all NBA Players on App Load
  // GetAllPlayers();

  // Render different pages for each route
  return (
    <>
      <Navigation />
      <Scoreboard />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/standings' element={<StandingsPage />} />
      </Routes>
    </>
  );
}

export default App;
