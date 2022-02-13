import React, { useState, useEffect } from 'react';
import { getTrends } from '../services/giphy';

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getTrends(10, setGifs);
  }, []);

  // Rendering
  const renderGifs = () => {
    if (gifs.length === 0) return <h2> Loading Gifs </h2>;
    else {
      console.log(gifs);
      return gifs.map((gif) => (
        <div className="gif-container" key={gif.id}>
          <p>{gif.title}</p>
          <img src={gif.images.original_still.url} />
        </div>
      ));
    }
  };

  return (
    <div className="container">
      <h1>Gifs</h1>
      <div className="gifs-container">{renderGifs()}</div>
    </div>
  );
}
