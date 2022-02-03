import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className='linkHome'>
        <h1 className='titleHeader'>Asana</h1>
      </Link>
    </header>
  )
};

export default Header;
