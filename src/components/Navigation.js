import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <h1>NBA React</h1>
      </Link>
      <nav className='navigation'>
        <Link to='/standings'>Standings</Link>
        <Link to='/players'>Players</Link>
        <Link to='/teams'>Teams</Link>
      </nav>
    </header>
  );
};

export default Navigation;
