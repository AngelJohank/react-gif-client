import React from 'react';

export default function GifItem({ gif }) {
  const gif_url = gif.images.downsized.url;

  return (
    <div className="gif-container">
      <img className="gif-img" src={gif_url} />
    </div>
  );
}
