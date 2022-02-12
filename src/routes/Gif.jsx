import React from 'react';
import { useParams } from 'react-router-dom';

export default function Gif() {
  const params = useParams();

  return <h1>Hello world from Gif with id: {params.id}</h1>;
}
