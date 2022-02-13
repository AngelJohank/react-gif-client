import React, { useState, useEffect } from 'react';
import { getTrends } from '../services/giphy';

// Components
import GifItem from '../components/GifItem';

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getTrends(6, setGifs);
  }, []);

  // Rendering
  const renderGifs = () => {
    if (gifs.length === 0) return <h2> Loading Gifs </h2>;
    else {
      return gifs.map((gif) => <GifItem key={gif.id} gif={gif} />);
    }
  };

  return (
    <>
      <h1>Trending gifs this {new Date().getFullYear()}</h1>
      <div className="galery">{renderGifs()}</div>
    </>
  );
}
