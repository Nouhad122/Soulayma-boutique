import React from 'react';
import CartProd from './CartProd';
import { useSelector } from 'react-redux';
import { IoIosLock } from "react-icons/io";
import './ShoppingCart.css';
import Button from '../Secondary-Comps/Button';


const ShoppingCart = () => {
  const cartProducts = useSelector(state => state.cart.products);
  const cartTotal = useSelector(state => state.cart.totalPriceOfAllProducts);

  return (
    <div className='shopping-cart'>
      <div className='cart-text'>
          <h1>Cart</h1>
      </div>
      {cartProducts.length > 0 ? (
        <div className='table-container'>
        <table className="cart-table">
          <thead>
            <tr className='headers-tr'>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map(product => (
             <CartProd
              key={product.id}
              product={{ 
                id: product.id,
                title: product.title,
                image1: product.image1,
                quantity: product.quantity,
                totalPrice: product.totalPrice,
                price: product.price 
              }}
             />
            ))}
          </tbody>
        </table>
        <div className='place-order'>
          <div className='order-notes'>
           <h1>Add Order Note</h1>
           <textarea placeholder='How Can We Help You'/> 
          </div>

          <div className='amount-checkout'>
          <h1 className='total-amount'>Total: {cartTotal.toFixed(2)}$</h1>
          <p>Shipping & Taxes calculated at checkout</p>
          <Button><IoIosLock className='lock-icon'/> Secure Checkout</Button>
        </div>
       </div>
      </div>
      ) : (
        <div className='cart-is-empty'>
          <h1>Your cart is empty</h1>
          <Button url="/shop/all/Hijabs/page/1" className="empty-cart-btn">Shop All Hijabs</Button>
        </div>
        
      )}
    </div>
  );
}

export default ShoppingCart;
