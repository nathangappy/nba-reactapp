import React from 'react';
import Scoreboard from '../components/Scoreboard';

const Layout = ({ children }) => {
  return (
    <>
      <h1>Navigation</h1>
      <Scoreboard />

      <div className='container'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
