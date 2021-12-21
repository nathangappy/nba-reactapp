import React from 'react';
import Navigation from './Navigation';
import Scoreboard from './Scoreboard';

const Layout = ({ children }) => {
  return (
    <>
      <div className='container'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
