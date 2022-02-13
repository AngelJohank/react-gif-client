import React, { useState, useEffect } from 'react';
import { getTrends } from '../services/giphy';

// Components
import GifItem from '../components/GifItem';
import GifList from '../components/GifList';

export default function App() {
  const [gifs, setGifs] = useState(null);

  useEffect(() => {
    getTrends(5, setGifs);
  }, []);

  // Rendering
  const renderGifs = () => {
    if (gifs) return <GifList list={gifs} />;
    else return <h2>Loading Gifs</h2>;
  };

  return (
    <>
      <h1>Gifs</h1>
      {renderGifs()}
    </>
  );
}
