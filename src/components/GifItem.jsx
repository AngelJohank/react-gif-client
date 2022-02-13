import React from 'react';

export default function GifItem({ gif }) {
  return (
    <div className="gif-container">
      <img className="gif-img" src={gif.images.original_still.url} />
    </div>
  );
}
