import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className='nav-menu'>
          
        <li>  <Link to='/home'>Home</Link></li>
        <li>  <Link to='/about'>About</Link></li>
        <li>  <Link to='/services'>Services</Link></li>
        <li>  <Link to='/contact'>Contact</Link></li>
        <li>  <Link to='/login'>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
