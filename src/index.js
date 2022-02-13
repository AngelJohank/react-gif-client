import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Routes
import App from './routes/App';
import NoMatch from './routes/NoMatch';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:query" element={<App />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

// Render
ReactDOM.render(
  <React.StrictMode>
    <div className="App">{router()}</div>
  </React.StrictMode>,
  document.getElementById('root')
);
