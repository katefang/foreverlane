import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.styles.scss';

const Navbar = () => (
  <header className='nav-bar'>
    <div className='nav-left'>
      <Link to=''>Women</Link>
      <Link to=''>Men</Link>
      <Link to=''>Denim</Link>
      <Link to=''>Tread</Link>
      <Link to=''>About</Link>
    </div>
    <span className='logo'>FOREVERLANE</span>
    <div className='nav-right'>
      <Link to=''>Search</Link>
      <Link to=''>Hi, Kate</Link>
      <Link to=''>Shopping Cart</Link>
    </div>
  </header>
);

export default Navbar;
