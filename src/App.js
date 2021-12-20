import { Routes, Route } from 'react-router-dom';
import { GetAllPlayers } from './helpers/GetAllPlayers';
import { GetScoreboard } from './helpers/GetScoreboard';
import HomePage from './pages/Home';

// Import Sass Files
import './scss/main.scss';

function App() {
  // Load all NBA Players on App Load
  GetAllPlayers();

  // Get Today's NBA Scoreboard
  GetScoreboard();

  // Render different pages for each route
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
