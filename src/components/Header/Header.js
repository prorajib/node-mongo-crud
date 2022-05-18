import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      <nav>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/products'>
          Products
        </Link>
        <Link className='link' to='/products/add'>
          Add product
        </Link>
      </nav>
    </div>
  );
};

export default Header;
