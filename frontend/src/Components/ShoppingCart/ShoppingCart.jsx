import React from 'react';
import './ShoppingCart.css';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';
import EmptyCart from './EmptyCart';
import { useSelector } from 'react-redux'
import PlaceOrder from './PlaceOrder';

const ShoppingCart = () => {
  const cartProducts = useSelector(state => state.cart.products || []);
  
  return (
    <div className='shopping-cart'>
      <div className='cart-text'>
          <h1>Cart</h1>
      </div>
      {Array.isArray(cartProducts) && cartProducts.length > 0 ?
       (
        <div className='table-container'>
          <table className="cart-table">
            <TableHeaders />
            <TableBody />
          </table>
          <PlaceOrder />
          
        </div>
      ) : 
        <EmptyCart />
      }
    </div>
  );
}

export default ShoppingCart;
