import React from 'react';
import Header from '../organisms/Header';

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template">
      <Header/>
      <main>{children}</main>
      
    </div>
  );
};

export default MainTemplate;