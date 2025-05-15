import React from 'react';
import './Checkout.css';

const OrderSummary = () => (
  <div className="order-summary">
    <div className="cart-items">
      <div className="cart-item">
        <img src="https://via.placeholder.com/50" alt="Product" />
        <div>
          <div>Breathable Printed Modal - Ombre</div>
          <div className="cart-item-sub">Jade</div>
        </div>
        <div>$24.00</div>
      </div>
      <div className="cart-item">
        <img src="https://via.placeholder.com/50" alt="Product" />
        <div>
          <div>Mesh Tie-Back - SpeakPure Set</div>
          <div className="cart-item-sub">Black-Layl</div>
        </div>
        <div>$44.00</div>
      </div>
    </div>
    <input type="text" placeholder="Discount code or gift card" className="checkout-input" />
    <button className="apply-btn">Apply</button>
    <div className="summary-row">Subtotal · 2 items <span>$68.00</span></div>
    <div className="summary-row">Shipping <span className="shipping-free">FREE</span></div>
    <div className="summary-total">Total <span>USD $68.00</span></div>
    <div className="summary-savings">TOTAL SAVINGS $19.99</div>
  </div>
);

export default OrderSummary; 