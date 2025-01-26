import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingBag }from "react-icons/fa";
import classes from './CartIcon.module.css';
import './NavigationLink.module.css';

const CartIcon = () => {
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);
  const fixedTotal = cartTotalQuantity <= 99 ? cartTotalQuantity : 99 + '+'; 

  return (
    <div className={classes.cartCont}>
              <Link to={'/cart'}>
              <FaShoppingBag className='shopping-bag' />
              </Link>
              <p className='bag-count'>({fixedTotal})</p>
    </div>
  )
}

export default CartIcon
