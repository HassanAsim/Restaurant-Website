import React from 'react';
import logo from '../Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" className="logo" />
    </header>
  );
}

export default Header;