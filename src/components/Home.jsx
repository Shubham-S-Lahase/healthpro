import React from 'react';
import './Home.css'; // Ensure you create a CSS file for additional styles

const Home = () => {
  return (
    <div className="relative w-full h-full flex-grow overflow-hidden"> 
      <img
        src="/imvitro.gif" 
        alt="Background GIF"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-20 flex items-center justify-center text-yellow-500">
        <h1 className="text-8xl font-bold animate-text">Welcome to IVF Pulse</h1>
      </div>
    </div>
  );
};

export default Home;