import React, { useState, useEffect } from 'react';

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log('Una vez');
  }, []);

  // Rendering
  const renderGifs = () => {
    if (gifs.length === 0) return 'Loading Gifs';
    else return 'Show list of gifs';
  };

  return (
    <div className="container">
      <h1>Gifs</h1>
      <div className="gif-container">{renderGifs()}</div>
    </div>
  );
}
