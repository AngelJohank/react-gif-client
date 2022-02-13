import React, { useState, useEffect } from 'react';
import { getTrends } from '../services/giphy';

// Components
import GifList from '../components/GifList';
import LoadingGifsScreen from '../components/LoadingGifsScreen';

export default function App() {
  const [gifs, setGifs] = useState(null);

  useEffect(() => {
    getTrends(10, setGifs);
  }, []);

  // Rendering
  const renderGifs = () => {
    if (gifs) return <GifList list={gifs} />;
    else return <LoadingGifsScreen />;
  };

  return (
    <>
      <h1>Gifs</h1>
      {renderGifs()}
    </>
  );
}
