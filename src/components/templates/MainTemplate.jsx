import React from 'react';
import Header from '../organisms/Header';

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template">
      <Header/>
      <main style={{margin:'1rem', marginRight:'2.5rem',marginLeft:'2.5rem'}}>{children}</main>
      
    </div>
  );
};

export default MainTemplate;