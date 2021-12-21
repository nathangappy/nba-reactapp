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
        <Link to='/player'>Players</Link>
      </nav>
    </header>
  );
};

export default Navigation;
