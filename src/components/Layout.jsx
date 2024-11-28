import React from 'react';
import Navbar from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;