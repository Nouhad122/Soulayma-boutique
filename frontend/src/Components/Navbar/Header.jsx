import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import Button from '../Secondary-Comps/Button.jsx';
import AuthContext from '../../store/AuthContext';

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <div className={classes.header}>
        <div className={classes.startGrp}>
         <Link>+90 5344421873</Link>
         <Link>Our Location</Link>   
        </div>
      
        <p className={classes.shippingSentence}>FREE & FAST SHIPPING ON ORDERS OVER $50 USD</p>

      <div className={classes.accountGrp}>
        {
          isLoggedIn ? (
            <Link to='/account'>Account</Link>
          ) : (
            <Link to='/auth' className={classes.loginBtn}>Sign In</Link>
          )
        }
        {isLoggedIn && (
          <button className={classes.logoutBtn} onClick={handleLogout}>Logout</button>
        )}
      </div>
    </div>
  )
}

export default Header
