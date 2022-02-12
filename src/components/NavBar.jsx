import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/gif/1"
            >
              gif
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
