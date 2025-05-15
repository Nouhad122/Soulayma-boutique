import React from 'react';
import './Checkout.css';

const DeliveryForm = () => (
  <div className="delivery-form">
    <div className="section-title">Delivery</div>
    <form>
      <select className="checkout-input">
        <option>Türkiye</option>
        <option>USA</option>
        <option>UK</option>
        <option>France</option>
        <option>Germany</option>
      </select>
      <div className="input-row">
        <input type="text" placeholder="First name" className="checkout-input" />
        <input type="text" placeholder="Last name" className="checkout-input" />
      </div>
      <input type="text" placeholder="Address" className="checkout-input" />
      <input type="text" placeholder="Apartment, suite, etc. (optional)" className="checkout-input" />
      <div className="input-row">
        <input type="text" placeholder="Postal code (optional)" className="checkout-input" />
        <input type="text" placeholder="City" className="checkout-input" />
      </div>
      <input type="text" placeholder="Phone" className="checkout-input" />
      <div className="checkbox-row">
        <input type="checkbox" id="sms-offers" />
        <label htmlFor="sms-offers">Text me with news and offers</label>
      </div>
    </form>
  </div>
);

export default DeliveryForm; 