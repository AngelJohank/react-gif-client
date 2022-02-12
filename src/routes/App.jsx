import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1>Hello world from App</h1>
      <Link to="gif/1">Ir a gif</Link>
    </div>
  );
}
