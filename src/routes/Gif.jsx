import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Gif() {
  const params = useParams();

  return (
    <div>
      <h1>Hello world from Gif with id: {params.id}</h1>
      <Link to="/">Ir a Home</Link>
    </div>
  );
}
