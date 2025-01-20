import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingBag }from "react-icons/fa";
import classes from './CartIcon.module.css';
import './NavigationLink.module.css';

const CartIcon = () => {
    const cart = useSelector(state => state.cart);
    
    const calculateCartLength = (cartItems) => {
        return cartItems.reduce((a, b) => a + b.quantity, 0);
      };

    const [cartLength, setCartLength] = useState(calculateCartLength(cart));

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartLength(calculateCartLength(cart));
    }, [cart]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartLength(calculateCartLength(savedCart));
    }, []);

  return (
    <div className={classes.cartCont}>
              <Link to={'/cart'}>
              <FaShoppingBag className='shopping-bag' />
              </Link>
              <p className='bag-count'>({cartLength})</p>
    </div>
  )
}

export default CartIcon
