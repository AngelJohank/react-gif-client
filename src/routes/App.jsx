import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTrends } from '../services/giphy';

// Components
import GifList from '../components/GifList';
import LoadingGifsScreen from '../components/LoadingGifsScreen';
import GifForm from '../components/GifForm';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [gifs, setGifs] = useState(null);

  useEffect(() => {
    getTrends(10, setGifs);
    // setSearchParams({ query: 'hola mundo' });
  }, []);

  const clickHandler = () => {
    setSearchParams({ query: 'holamundo' });
  };

  // Rendering
  const renderGifs = () => {
    const query = searchParams.get('query');
    console.log(query);
    if (gifs) return <GifList list={gifs} />;
    else return <LoadingGifsScreen />;
  };

  return (
    <>
      <h1>Gifs // Testing mode</h1>
      <button onClick={clickHandler}>Presioname</button>

      <GifForm />
      {renderGifs()}
    </>
  );
}
