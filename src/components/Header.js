import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.svg';

function Header() {
  return (
    <header role="banner">
      <Link to="/" aria-label="Go to Little Lemon home page">
        <img src={logo} alt="Little Lemon Restaurant" className="logo" />
      </Link>
    </header>
  );
}

export default Header;