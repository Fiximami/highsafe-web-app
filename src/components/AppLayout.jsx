import React from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

const AppLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
