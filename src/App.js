import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GetAllPlayers } from './helpers/GetAllPlayers';

// Fixed Components
import Navigation from './components/Navigation';
import Scoreboard from './components/Scoreboard';

// Pages
import HomePage from './pages/Home';
import StandingsPage from './pages/Standings';
import PlayerSearchPage from './pages/PlayerSearch';
import PlayerDetails from './pages/PlayerDetails';
import TeamsPage from './pages/Teams';
import TeamDetails from './pages/TeamDetails';

// Import Sass Files
import './scss/main.scss';

function App() {
  // Load all NBA Players on App Load
  useEffect(() => {
    GetAllPlayers();
  }, []);

  // Render different pages for each route
  return (
    <>
      <Navigation />
      <Scoreboard />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/standings' element={<StandingsPage />} />
        <Route path='/players' element={<PlayerSearchPage />} />
        <Route path='/player/:personId' element={<PlayerDetails />} />
        <Route path='/teams' element={<TeamsPage />} />
        <Route path='/teams/:team' element={<TeamDetails />} />
      </Routes>
    </>
  );
}

export default App;
