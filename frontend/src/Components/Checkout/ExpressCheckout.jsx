import React from 'react';
import './Checkout.css';

const ExpressCheckout = () => (
  <div className="express-checkout">
    <div className="express-title">Express checkout</div>
    <div className="express-buttons">
      <button className="shop-pay">shop Pay</button>
      <button className="paypal">PayPal</button>
      <button className="gpay">G Pay</button>
    </div>
    <div className="express-or">
      <span>OR</span>
      <hr />
    </div>
  </div>
);

export default ExpressCheckout; 