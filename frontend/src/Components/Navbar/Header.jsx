import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='start-grp'>
         <Link className='header-link'>+90 5344421873</Link>
         <Link className='header-link'>Our Location</Link>   
        </div>
      
        <p>FREE & FAST SHIPPING ON ORDERS OVER $50 USD</p>

        <Link className='header-link'>Account</Link>
    </div>
  )
}

export default Header
