import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './normalize.css';

// Routes
import NavBar from './components/NavBar';
import App from './routes/App';
import Gif from './routes/Gif';
import NotFound from './routes/NotFound';

// Render
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="gif/:id" element={<Gif />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
