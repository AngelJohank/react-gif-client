import React, { useState, useEffect } from 'react';
import { searchGifs } from '../services/giphy';

// Components
import GifItem from '../components/GifItem';

export default function App() {
  const [gifs, setGifs] = useState(null);

  useEffect(() => {
    searchGifs('pipo math', 15, setGifs);
  }, []);

  // Rendering
  const renderGifs = () => {
    if (!gifs) return <h2> Loading Gifs </h2>;
    else {
      return gifs.map((gif) => <GifItem key={gif.id} gif={gif} />);
    }
  };

  return (
    <>
      <h1>Trending gifs this</h1>
      <div className="galery">{renderGifs()}</div>
    </>
  );
}
