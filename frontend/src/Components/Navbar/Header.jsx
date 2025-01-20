import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.startGrp}>
         <Link>+90 5344421873</Link>
         <Link>Our Location</Link>   
        </div>
      
        <p>FREE & FAST SHIPPING ON ORDERS OVER $50 USD</p>

        <Link>Account</Link>
    </div>
  )
}

export default Header
