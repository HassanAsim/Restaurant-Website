import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <ul role="menubar">
        <li role="none"><Link to="/" role="menuitem" aria-current="page">Home</Link></li>
        <li role="none"><Link to="/about" role="menuitem">About</Link></li>
        <li role="none"><Link to="/menu" role="menuitem">Menu</Link></li>
        <li role="none"><Link to="/booking" role="menuitem">Reservations</Link></li>
        <li role="none"><Link to="/contact" role="menuitem">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;