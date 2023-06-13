
import React from 'react';

const UnderConstruction = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f2f2f2'
    }}>
      
      <h1 style={{ fontSize: '36px', color: '#333333', marginBottom: '10px' }}>Under Construction</h1>
      <p style={{ fontSize: '18px', color: '#666666', textAlign: 'center', maxWidth: '400px' }}>
      GProjukti.com. This page is currently under construction.
      </p>
    </div>
  );
};

export default UnderConstruction;
