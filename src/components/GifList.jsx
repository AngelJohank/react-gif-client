import React from 'react';
import GifItem from './GifItem';

export default function GifList({ list }) {
  const GifItems = () => {
    const allGifs = list.map((gif) => <GifItem key={gif.id} gif={gif} />);
    return allGifs;
  };

  return <div className="gif-list">{GifItems()}</div>;
}
