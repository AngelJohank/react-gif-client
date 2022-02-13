import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTrends, searchGifs } from '../services/giphy';

// Components
import GifList from '../components/GifList';
import LoadingGifsScreen from '../components/LoadingGifsScreen';
import GifForm from '../components/GifForm';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [gifs, setGifs] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      searchGifs(query, 10, setGifs);
      document.title = 'Gif engine: ' + query;
    } else getTrends(10, setGifs);
  }, [searchParams.get('query')]);

  // Rendering
  const renderGifs = () => {
    if (gifs) return <GifList list={gifs} />;
    else return <LoadingGifsScreen />;
  };

  return (
    <>
      <h1>Gifs // Testing mode (hecho por tu causa Angel)</h1>
      <GifForm searchParams={searchParams} setSearchParams={setSearchParams} />
      {renderGifs()}
    </>
  );
}
