import React from 'react';
import './Checkout.css';

const PaymentMethod = () => (
  <div className="payment-method">
    <div className="section-title">Payment</div>
    <div className="payment-info">All transactions are secure and encrypted.</div>
    <div className="payment-option">
      <input type="radio" id="credit-card" name="payment" defaultChecked />
      <label htmlFor="credit-card">Credit card</label>
      <div className="card-inputs">
        <input type="text" placeholder="Card number" className="checkout-input" />
        <div className="input-row">
          <input type="text" placeholder="Expiration date (MM / YY)" className="checkout-input" />
          <input type="text" placeholder="Security code" className="checkout-input" />
        </div>
        <input type="text" placeholder="Name on card" className="checkout-input" />
        <div className="checkbox-row">
          <input type="checkbox" id="billing-address" defaultChecked />
          <label htmlFor="billing-address">Use shipping address as billing address</label>
        </div>
      </div>
    </div>
    <div className="payment-option">
      <input type="radio" id="paypal" name="payment" />
      <label htmlFor="paypal">PayPal</label>
    </div>
    <div className="payment-option">
      <input type="radio" id="shop-pay" name="payment" />
      <label htmlFor="shop-pay">Pay in full or in installments (Shop Pay)</label>
    </div>
  </div>
);

export default PaymentMethod; 